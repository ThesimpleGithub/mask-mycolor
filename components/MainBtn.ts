import styled from 'styled-components';

const MainBtn = {
  ModeBtn: styled.div`
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    margin-top: 5px;
  `,
  TextWrapper: styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 1vh;
  `,
  ImgWrapper: styled.div`
    width: 4.22vh;
    height: 4.22vh;
    min-width: 24px;
    min-height: 24px;
    border-radius: 100px;
    background-color: #ff5da3;
    display: flex;
  `,
  CamImg: styled.img`
    width: 2vh;
    min-width: 12px;
    min-height: 12px;
    height: 2vh;
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  `,
  P: styled.p`
    font-weight: 300;
    font-size: 1.22vh;
    margin-top: 0.63vh;
    color: #92888c;
    @media (max-height: 513px) {
      font-size: 8px;
    }
  `,

  H1: styled.span`
    font-size: 1.9vh;
    @media (max-height: 513px) {
      font-size: 11px;
    }
  `,
  MiddleWrapper: styled.div`
    display: flex;
    align-items: center;
  `,
  Wrapper: styled.div`
    display: flex;
    padding: 2vh 2vh;
    align-items: center;
    position: relative;
    margin-bottom: 2.5vh;
    background: white;
    text-align: center;
    cursor: pointer;
    box-shadow: 0px 10px 40px #0000000f;
    border-radius: 1.11vh;
    :hover {
      background-color: #ebfdfc;
    }
  `,
};

export default MainBtn;
