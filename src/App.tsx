import styled from 'styled-components';
// import ProgressBar from '../components/home/ProgressBar';
import { useEffect, useState } from 'react';
// import FaceBoardBtnGroup from '../components/home/FaceBoardBtnGroup';
// import MetaTag from '../components/home/MetaTag';
// import Router from '../components/home/Router';
// import Header from '../components/home/Header';
import MainBtnWrapper from './components/MainBtnWrapper';
// import TestExplain from '../components/home/TestExplain';
// import Loading from '../components/home/Loading';
// import ScanNotice from '../components/home/ScanNotice';
// import ML_Loading from '../components/home/ML_Loading';
// import { useSelector } from 'react-redux';
// import { StoreState } from '../store';
import MainImage from './components/MainImage';
import MiddleInfo from './components/MiddleInfo';
import Header from './components/Header';
import VideoCanvas from './components/VideoCanvas';
import VideoMode from './components/VideoMode';
import UploadMode from './components/UploadMode';
// import NewFaceBoardBtnGroup from '../components/home/NewFaceBoardBtnGroup';

const MainBody = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-image: url('/images/background.svg');
  overflow-y: hidden;
  @media (max-height: 568px) {
    height: unset;
    min-height: 100vh;
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
  useEffect(() => {
    document.body.parentElement!.style.fontSize = '10px';
    const img = new Image();
    img.src = `/images/background.svg`;
    img.onload = () => {
      const body = document.getElementById('mainBody');
      body!.style.backgroundImage = `url(${img.src})`;
      body!.style.display = 'flex';
    };
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
