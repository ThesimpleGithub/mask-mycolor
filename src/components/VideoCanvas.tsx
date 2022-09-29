import * as faceLandmarksDetection from '@tensorflow-models/face-landmarks-detection';
import { ReactElement, useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { drawFaceLine } from '../utils/drawFaceLine';
import drawMask from '../utils/drawMask';
import theme from '../utils/theme';
import MaskSlider from './MaskSlider';
import { maskObj, maskType } from '../datas/maskData';
import ModalPortal from './Portal';
import ML_Loading from './ML_Loading';
import { BsFillQuestionCircleFill } from 'react-icons/bs';

export interface Mask {
  /**마스크색상 */
  color: string;
  href: string;
  image: string;
  maskID?: number;
  price?: number;
  type?: string;
  masks?: {
    color: {
      colorID: number;
      result: number;
    };
  };
}

const Wrapper = styled.div`
  white-space: pre-wrap;
  background: rgb(230, 230, 230);
  padding: 1.5vh 2vh;
  color: black;
  width: 100%;
  font-size: 1.7vh;
  margin-top: 0.5vh;
  margin-bottom: 1vh;
  text-align: center;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  @media (max-width: 720px) {
    padding: 2vw 4.17vw;
    font-size: 2.42vw;
  }
  ${theme.borderRadius}
`;

const VideoCss = css`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  transform: scale(-1, 1);
  transition: 0.125s linear;
`;
const UI_Wrapper = styled.div`
  z-index: 100002;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 70%;
  max-width: 900px;
`;
const Video = styled.video`
  opacity: 0;
  ${VideoCss}
`;
const Canvas = styled.canvas`
  z-index: 100001;
  ${VideoCss}
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  justify-content: end;
  align-items: center;
`;

const ColorLink = styled.button`
  background-color: #db4c64;
  border-radius: 15px;
  color: white;
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 100004;
  svg {
    margin-left: 5px;
  }
`;

interface props {
  drawMethod: string;
  stream: MediaStream;
}

const VideoCanvas = ({ drawMethod, stream }: props) => {
  const [explain, setExplain] =
    useState<string>('인공지능을 불러오는 중입니다.');

  const [isScanEnd, setScanEnd] = useState<boolean>(false);
  const [maskData, setMaskData] = useState<maskType[]>(maskObj.새부리형);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isCalculated, setIsCalculating] = useState<boolean>(false);
  const selectedMask = useRef<maskType>(maskObj.새부리형[0]);

  const handleChangeMaskData = (type: string) => {
    selectedMask.current = maskObj[type][0];
    setMaskData(maskObj[type]);
  };

  const handleChangeMask = (idx: number) => {
    (drawCanvas.current! as drawMask).setMaskImage(maskData[idx]);
    selectedMask.current = maskData[idx];
  };

  const canvas = useRef<HTMLCanvasElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const drawCanvas = useRef<drawFaceLine | drawMask>();
  const model = useRef<faceLandmarksDetection.FaceLandmarksPackage>();

  const scanDraw = (positions: number[][]) => {
    (drawCanvas.current! as drawFaceLine).draw(positions);
  };
  const maskDraw = (positions: number[][]) => {
    (drawCanvas.current! as drawMask).draw(positions);
  };
  const animate = async () => {
    const predictions = await model.current!.estimateFaces({
      input: video.current!,
      returnTensors: false,
      flipHorizontal: false,
      predictIrises: false,
    });

    drawCanvas.current?.clear();
    if (predictions) {
      const positions = predictions![0]?.scaledMesh;
      if (positions) {
        if (!isScanEnd) scanDraw(positions);
        else maskDraw(positions);
      }
    }
    const srcObj: any = video.current!.srcObject;
    if (srcObj.active) requestAnimationFrame(animate);
  };

  useEffect(() => {
    video.current!.srcObject = stream;
    video.current!.play().then(() => {
      drawCanvas.current = new drawFaceLine(
        setScanEnd,
        setExplain,
        setIsLoading,
        setIsCalculating,
      );
      faceLandmarksDetection
        .load(faceLandmarksDetection.SupportedPackages.mediapipeFacemesh, {
          maxFaces: 1,
        })
        .then(m => {
          model.current = m;
          setIsLoading(false);
          animate();
        });
    });
  }, []);

  useEffect(() => {
    if (isScanEnd) {
      setExplain('원하는 마스크를 착용해보세요.');
      drawCanvas.current = new drawMask();
      (drawCanvas.current! as drawMask).setMaskImage(selectedMask.current);
    }
    if (model.current) animate();
  }, [isScanEnd]);

  useEffect(() => {
    if (isScanEnd) {
      (drawCanvas.current! as drawMask).setMaskImage(maskData[0]);
    }
  }, [maskData]);
  console.log(isScanEnd);
  return (
    <Container>
      <Canvas id="canvas" ref={canvas} />
      <Video id="video" ref={video} />
      <ModalPortal>
        {
          (!isLoading ? (
            ''
          ) : isCalculated ? (
            <ML_Loading
              text="잠시만 기다려주세요."
              title="퍼스널컬러를 측정 중입니다."
            />
          ) : (
            <ML_Loading
              text="기기에 따라 최대 1분 가까이 소요됩니다."
              title="인공지능을 불러오는 중입니다."
            />
          )) as ReactElement
        }
      </ModalPortal>
      <ColorLink>
        퍼스널컬러 <BsFillQuestionCircleFill />
      </ColorLink>
      <UI_Wrapper>
        <Wrapper>{explain}</Wrapper>
      </UI_Wrapper>
      {isScanEnd && (
        <MaskSlider
          maskDataArr={maskData}
          selectedMask={selectedMask.current}
          handleChangeMaskData={handleChangeMaskData}
          handleChangeMask={handleChangeMask}
        />
      )}
    </Container>
  );
};

export default VideoCanvas;
