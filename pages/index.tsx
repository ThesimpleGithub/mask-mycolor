import styled from 'styled-components';
import { useEffect, useState } from 'react';
import MainImage from '../components/MainImage';
import MiddleInfo from '../components/MiddleInfo';
import Header from '../components/Header';
import VideoCanvas from '../components/VideoCanvas';
import VideoMode from '../components/VideoMode';
import UploadMode from '../components/UploadMode';

const MainBody = styled.section`
  display: flex;
  opacity: 0;
  flex-direction: column;
  align-items: center;
  height: calc(var(--vh, 1vh) * 100);
  background-size: cover;
  background-position: center;
  background-image: url(${process.env.PATH}/images/background.svg);
  overflow-y: hidden;
  transition: opacity 1s;
  @media (max-height: 568px) {
    height: unset;
    min-height: calc(var(--vh, 1vh) * 100);
    justify-content: unset;
    padding-bottom: 60px;
  }
`;
const HeaderWrapper = styled.div`
  flex-direction: column;
  align-items: center;
  transition: all 0.5s ease-in;
  display: flex;
`;
export const Video = styled.video`
  object-fit: fill;
  transform: scale(-1, 1);
  display: none;
`;
export const Canvas = styled.canvas`
  left: 0;
  transform: scale(-1, 1);
`;
const Wrapper = styled.div`
  position: relative;
  margin-top: 25px;
  transition: all 0.5s ease-out;
  opacity: 0;
  @media (min-width: 1025px) {
    width: 650px;
  }
  @media (min-width: 610px) and (max-width: 1024px) {
    width: 600px;
  }
  @media (max-width: 610px) {
    width: 320px;
  }
`;

const App = () => {
  const [streamState, setStream] = useState<MediaStream>();

  const resizeHeight = () =>
    document.documentElement.style.setProperty(
      '--vh',
      `${window.innerHeight * 0.01}px`,
    );

  useEffect(() => {
    const img = new Image();
    img.src = `/images/background.svg`;
    img.onload = () => {
      const body = document.getElementById('mainBody');
      body!.style.backgroundImage = `url(${img.src})`;
      body!.style.opacity = '1';
    };
    resizeHeight();
    window.addEventListener('resize', resizeHeight);
  }, []);

  return (
    <MainBody id="mainBody">
      {/* <MetaTag />
      <Router /> */}
      {/* 테스트 들어가기전 ui */}
      {streamState ? (
        <VideoCanvas drawMethod="scan" stream={streamState} />
      ) : (
        <HeaderWrapper id="headerWrapper">
          <Header />
          <MainImage />
          <MiddleInfo />
          <section>
            <VideoMode setStream={setStream} />
            <UploadMode />
          </section>
        </HeaderWrapper>
      )}
    </MainBody>
  );
};
export default App;
