import * as faceLandmarksDetection from '@tensorflow-models/face-landmarks-detection';
import { ReactElement, useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { drawFaceLine } from '../utils/drawFaceLine';
import drawMask from '../utils/drawMask';
import theme from '../utils/theme';
import MaskSlider from './MaskSlider';
import {
  colorType,
  maskObj,
  maskType,
  personalColorMask,
} from '../datas/maskData';
import ModalPortal from './Portal';
import ML_Loading from './ML_Loading';
import { BsFillQuestionCircleFill } from 'react-icons/bs';
import { IoMdRefreshCircle } from 'react-icons/io';
import lazyLoading from '../utils/lazyLoading';
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

export interface personalColor {
  result: string;
  resultKor: string;
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
  max-width: 700px;
`;
const Video = styled.video`
  opacity: 0;
  ${VideoCss}
`;
const Canvas = styled.canvas`
  z-index: 100001;
  max-width: 900px;
  ${VideoCss}
`;

const Container = styled.div`
  display: flex;
  height: calc(var(--vh, 1vh) * 100);
  width: 100vw;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const topBtnCss = css`
  padding: 7px 15px;
  position: absolute;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 100004;
  font-size: 23px;
  border-radius: 20px;
  top: 10px;
  background-color: #db4c64;
  @media (orientation: portrait) and (max-width: 720px),
    (orientation: landscape) and (max-height: 720px) {
    font-size: 3.5vmin;
    border-radius: 3vmin;
    padding: 1.3vmin 3vmin;
  }
  svg {
    margin-left: 5px;
  }
`;
const Refresh = styled.button`
  left: 10px;
  ${topBtnCss}
  svg {
    font-size: 29px;
  }
  @media (orientation: portrait) and (max-width: 720px),
    (orientation: landscape) and (max-height: 720px) {
    svg {
      font-size: 4.2vmin;
    }
  }
`;
const ColorLink = styled.button`
  right: 10px;
  ${topBtnCss}
`;

interface props {
  drawMethod: string;
  stream: MediaStream;
}

const VideoCanvas = ({ drawMethod, stream }: props) => {
  const [explain, setExplain] =
    useState<string>('인공지능을 불러오는 중이예요');

  const [isScanEnd, setScanEnd] = useState<boolean>(false);
  const [maskData, setMaskData] = useState<maskType[]>(maskObj[0].list);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isCalculated, setIsCalculating] = useState<boolean>(false);
  const [colorData, setColorData] = useState<personalColor>({
    result: '',
    resultKor: '',
  });

  const selectedMask = useRef<maskType>(maskObj[0].list[0]);
  const handleChangeMaskData = (idx: number) => {
    selectedMask.current = maskObj[idx].list[0];
    setMaskData(maskObj[idx].list);
  };

  const handleChangeMask = (idx: number) => {
    (drawCanvas.current! as drawMask).setMaskImage(maskData[idx]);
    selectedMask.current = maskData[idx];
  };

  const canvas = useRef<HTMLCanvasElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const slider = useRef<HTMLDivElement>(null);
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

    try {
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
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    video.current!.srcObject = stream;
    try {
      video.current!.play().then(() => {
        drawCanvas.current = new drawFaceLine(
          setScanEnd,
          setExplain,
          setIsLoading,
          setIsCalculating,
          setColorData,
        );
        drawCanvas.current.init(
          canvas.current!,
          video.current!,
          slider.current!,
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
    } catch (error: any) {
      setExplain(error);
    }
  }, []);

  useEffect(() => {
    if (isScanEnd) {
      const { maskList, explain } =
        personalColorMask[colorData.resultKor as colorType];
      const newKey = `퍼스널컬러 추천 - ${colorData.resultKor}`;
      maskObj.unshift({ name: newKey, list: maskList });
      setMaskData(maskObj[0].list);
      setExplain(explain);
      drawCanvas.current = new drawMask();
      drawCanvas.current.init(canvas.current!, video.current!, slider.current!);
      selectedMask.current = maskObj[0].list[0];
      (drawCanvas.current! as drawMask).setMaskImage(
        selectedMask.current as maskType,
      );
    }
  }, [isScanEnd]);

  useEffect(() => {
    lazyLoading();
    if (isScanEnd) {
      (drawCanvas.current! as drawMask).setMaskImage(maskData[0]);
    }
  }, [maskData]);
  return (
    <Container>
      <Canvas id="canvas" ref={canvas} />
      <Video muted playsInline id="video" ref={video} />
      <ModalPortal>
        {
          (!isLoading ? (
            ''
          ) : isCalculated ? (
            <ML_Loading
              text="잠시만 기다려주세요"
              title="퍼스널컬러를 측정 중이에요!"
            />
          ) : (
            <ML_Loading
              text="기기에 따라 최대 1분 가까이 소요될 수 있어요"
              title="인공지능을 불러오는 중이에요"
            />
          )) as ReactElement
        }
      </ModalPortal>
      <Refresh onClick={() => window.location.reload()}>
        다시하기 <IoMdRefreshCircle />
      </Refresh>
      <ColorLink
        onClick={() => window.open(`https://mycolor.kr/${colorData.result}`)}
      >
        {colorData.resultKor || '퍼스널컬러'} <BsFillQuestionCircleFill />
      </ColorLink>
      <UI_Wrapper>
        <Wrapper id="testExplain">{explain}</Wrapper>
      </UI_Wrapper>
      <div ref={slider}>
        <MaskSlider
          maskDataArr={maskData}
          selectedMask={selectedMask.current}
          handleChangeMaskData={handleChangeMaskData}
          handleChangeMask={handleChangeMask}
        />
      </div>
    </Container>
  );
};

export default VideoCanvas;
