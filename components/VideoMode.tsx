import MainBtn from './MainBtn';
import Stream from '../utils/canStream';
import VideoCanvas from './VideoCanvas';
import { drawFaceLine } from '../utils/drawFaceLine';
import { ReactElement, useState } from 'react';
import Debounce from '../utils/Debounce';

const VideoMode = ({
  setStream,
}: {
  setStream: React.Dispatch<React.SetStateAction<MediaStream | undefined>>;
}): ReactElement => {
  const deb = Debounce();
  return (
    <MainBtn.Wrapper
      onClick={() => {
        deb.debounce(async () => {
          const stream = await Stream('scan');
          if (stream) setStream(stream);
        }, 300);
      }}
    >
      <MainBtn.MiddleWrapper>
        <MainBtn.ImgWrapper>
          <MainBtn.CamImg
            alt="camera 카메라"
            src={`${process.env.PATH}/images/camera.svg`}
          />
        </MainBtn.ImgWrapper>
        <MainBtn.TextWrapper>
          <MainBtn.H1>실시간 측정 방식</MainBtn.H1>
          <MainBtn.P>기종에 따라 다소 느릴 수 있어요</MainBtn.P>
          {/* <MainBtn.H1>알려드립니다!</MainBtn.H1>
          <MainBtn.P>
            더 정확한 인공지능을 만들기 위해 <br></br>잠시동안 자가진단 기능만이
            제공됩니다.
          </MainBtn.P> */}
        </MainBtn.TextWrapper>
      </MainBtn.MiddleWrapper>
    </MainBtn.Wrapper>
  );
};

export default VideoMode;
