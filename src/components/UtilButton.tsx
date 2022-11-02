import React, { useState } from 'react';
import styled from 'styled-components';
import { BsArrowsExpand, BsCamera } from 'react-icons/bs';
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

const UtilButton = ({
  canvas,
  slider,
}: {
  canvas: HTMLCanvasElement;
  slider: HTMLDivElement;
}) => {
  const [isHide, setIsHide] = useState<boolean>(false);

  return (
    <BtnWrapper>
      <button
        onClick={() => {
          const link = document.createElement('a');
          link.download = new Date() + '마스크착용.png';
          link.href = canvas.toDataURL();
          link.click();
          link.remove();
        }}
      >
        <BsCamera />
      </button>
      <button
        onClick={e => {
          const height = slider.clientHeight;
          e.currentTarget.parentElement!.parentElement!.parentElement!.style.transform = `translateY(${
            isHide ? 0 : height
          }px)`;
          setIsHide(!isHide);
        }}
      >
        <BsArrowsExpand />
      </button>
    </BtnWrapper>
  );
};

export default UtilButton;
