import styled, { css, keyframes } from 'styled-components';
// 재사용성 높은 css들 모아놓고 테마로 씀
const theme = {
  Container: styled.section`
    max-width: 720px !important;
    width: 720px;
    margin: auto !important;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
    @media (max-width: 720px) {
      width: 100%;
    }
  `,
  Svg: styled.svg`
    width: 30px;
    height: 30px;
    @media (max-width: 720px) {
      width: 4.16vw;
      height: 4.16vw;
    }
  `,
  loginBtn: styled.div`
    background: #4267b2;
    color: white;
    display: flex;
    align-items: center;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 12px;
    cursor: pointer;
    margin-bottom: 10px;
    height: 40px;
    width: 300px;
    @media (max-width: 500px) {
      width: 200px;
    }
  `,
  columnWrapper: styled.article`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
    margin-bottom: 92px;
    @media (max-width: 720px) {
      margin-bottom: 12.78vw;
    }
  `,
  fadeUp: keyframes`
    0% {
      opacity: 0;
      transform : translateY(10px);
    }
     
    100% {
      opacity: 1;
      transform : translateY(0px);
    }
  `,
  fadeUp2: keyframes`
    0% {
      opacity: 0;
      transform : translateY(20px);
    }
    
    100% {
      opacity: 1;
      transform : translateY(0px);
    }
  `,
  flexDiv: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
  `,
  noneOutline: css`
    outline: 0;
    cursor: pointer;
    transition: all ease-out 0.3s;
    padding: 4px 8px;
    font-size: 0.9em;
  `,
  sectionCss: css`
    margin-bottom: 60px;
  `,
  boxShadow: css`
    box-shadow: 0px 5px 20px #00000029;
    @media (max-width: 720px) {
      box-shadow: 0px 0.6vw 2.4vw #00000029;
    }
  `,
  lineHeight: css`
    line-height: 24px;
    @media (max-width: 720px) {
      line-height: 3.4vw;
    }
  `,
  borderRadius: css`
    border-radius: 8px;
    @media (max-width: 720px) {
      border-radius: 1.11vw;
    }
  `,
};

export default theme;
