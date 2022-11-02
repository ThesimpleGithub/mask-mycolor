import * as faceLandmarksDetection from '@tensorflow-models/face-landmarks-detection';
import '@tensorflow/tfjs-backend-cpu';

import { ReactElement, useCallback, useEffect, useRef, useState } from 'react';
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
import {
  BsFillQuestionCircleFill,
  BsArrowsExpand,
  BsCamera,
} from 'react-icons/bs';
import { IoMdRefreshCircle } from 'react-icons/io';
import lazyLoading from '../utils/lazyLoading';
import UtilButton from './UtilButton';
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
  padding: 1.5vh;
  color: black;
  font-size: 1.7vh;
  margin-top: 0.5vh;
  margin-bottom: 1vmin;
  text-align: center;
  position: relative;
  white-space: nowrap;
  @media (max-width: 720px) {
    padding: 2vw;
    font-size: 2.42vw;
  }
  ${theme.borderRadius}
`;

const VideoCss = css`
  /* width: 100vw; */
  position: fixed;
  top: 0;
  /* transform: scale(-1, 1); */
  transition: 0.125s linear;
`;
const UI_Wrapper = styled.div`
  width: 100vw;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: row;
`;
const BtnWrapper = styled.div`
  position: absolute;
  right: 20px;
  bottom: 55px;
  font-size: 29px;
  button:nth-child(2) {
    margin-bottom: 1vmin;
    margin-top: 1vmin;
  }
  button {
    padding: 10px;
    display: flex;
    align-items: center;
    border-radius: 100px;
    font-size: 29px;
    position: relative;
    background: rgb(62 62 62 / 74%);
    color: #ffffff;
    :active {
      background: rgb(62 62 62 / 90%);
    }
  }
  @media (max-width: 720px) {
    bottom: 9vmin;
    right: 2.77vmin;
    button {
      font-size: 5.22vmin;
      padding: 2vmin;
    }
  }
`;
const Video = styled.video`
  opacity: 0;
  max-width: 100vw;
  ${VideoCss}
`;
const Canvas = styled.canvas`
  height: 100%;
  width: auto;
  z-index: 100001;
  ${VideoCss}
`;
//803 969  720 868
//1430 969 1062 720
//1282 969 952 720
//1044 969 775 720
//923 969 720 755
//314 969 720 2221
const Container = styled.div`
  display: flex;
  height: calc(var(--vh, 1vh) * 100);
  width: 100vw;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const BottomWrapper = styled.div<{ yPos: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.5s;
  z-index: 100003;
  transform: translateY(${props => props.yPos}px);
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
  height: 40px;
  background-color: #db4c64;
  @media (orientation: portrait) and (max-width: 720px),
    (orientation: landscape) and (max-height: 720px) {
    font-size: 3.5vmin;
    border-radius: 3vmin;
    padding: 1.3vmin 3vmin;
    height: 7vmin;
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
const SlideBtn = styled.button``;
interface props {
  drawMethod: string;
  stream: MediaStream;
}

const VideoCanvas = ({ drawMethod, stream }: props) => {
  const [explain, setExplain] =
    useState<string>('인공지능을 불러오는 중이에요');
  console.log('root render');
  const [isScanEnd, setScanEnd] = useState<boolean>(false);
  const [maskData, setMaskData] = useState<maskType[]>(maskObj[0].list);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [bottomY, setBottomY] = useState<number>(0);
  const [isCalculated, setIsCalculating] = useState<boolean>(false);
  const [colorData, setColorData] = useState<personalColor>({
    result: '',
    resultKor: '',
  });

  const selectedMask = useRef<maskType>(maskObj[0].list[0]);
  const handleChangeMaskData = useCallback((idx: number) => {
    selectedMask.current = maskObj[idx].list[0];
    setMaskData(maskObj[idx].list);
  }, []);

  const handleChangeMask = useCallback(
    (idx: number) => {
      (drawCanvas.current! as drawMask).setMaskImage(maskData[idx]);
      selectedMask.current = maskData[idx];
    },
    [maskData],
  );

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
    try {
      const predictions = await model.current!.estimateFaces({
        input: video.current!,
        returnTensors: false,
        flipHorizontal: false,
        predictIrises: false,
      });

      drawCanvas.current?.clear();
      if (predictions[0]) {
        const positions = predictions![0]?.scaledMesh;
        if (positions) {
          if (!isScanEnd) scanDraw(positions);
          else maskDraw(positions);
        }
      } else {
        setIsLoading(false);
        setExplain('얼굴이 감지되지 않았어요. 카메라에 얼굴을 비춰주세요.');
      }

      const srcObj: any = video.current!.srcObject;
      if (srcObj.active) requestAnimationFrame(animate);
    } catch (error: any) {
      alert('에러가 발생했습니다. 다시 시도해 주세요.');
    }
  };

  useEffect(() => {
    try {
      video.current!.srcObject = stream;
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
            animate();
          });
      });
    } catch (error: any) {
      alert('before detected ');
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
  useEffect(() => {}, []);
  useEffect(() => {
    if (isScanEnd) {
      (drawCanvas.current! as drawMask).setMaskImage(maskData[0]);
    }
    setTimeout(() => {
      lazyLoading();
    }, 0);
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
      <BottomWrapper yPos={bottomY}>
        <UI_Wrapper>
          <Wrapper id="testExplain">{explain}</Wrapper>
          <BtnWrapper>
            <button
              onClick={() => {
                const link = document.createElement('a');
                link.download = new Date() + '마스크착용.png';
                link.href = canvas.current!.toDataURL();
                link.click();
                link.remove();
              }}
            >
              <BsCamera />
            </button>
            <button
              onClick={() => {
                const height = slider.current!.clientHeight;
                setBottomY(bottomY ? 0 : height);
              }}
            >
              <BsArrowsExpand />
            </button>
          </BtnWrapper>
          {/* <UtilButton /> */}
        </UI_Wrapper>
        <div ref={slider}>
          <MaskSlider
            maskDataArr={maskData}
            selectedMask={selectedMask}
            handleChangeMaskData={handleChangeMaskData}
            handleChangeMask={handleChangeMask}
          />
        </div>
      </BottomWrapper>
    </Container>
  );
};

export default VideoCanvas;
