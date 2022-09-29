import { useEffect, ReactElement, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import MaskComponent from './MaskComponent';
import styled from 'styled-components';
import { maskObj, maskType } from '../datas/maskData';

interface props {
  maskDataArr: maskType[];
  handleChangeMaskData(arg0: string): void;
  handleChangeMask(arg0: number): void;
  selectedMask: maskType;
}

const MaskSlider = ({
  maskDataArr,
  handleChangeMaskData,
  handleChangeMask,
  selectedMask,
}: props): ReactElement => {
  const [slideUnit, setSlideUnit] = useState<number>();

  const settings = {
    className: 'center',
    infinite: false,

    slidesToShow: slideUnit,
    swipeToSlide: true,
    speed: 200,
  };

  const Div = styled.article`
    transition: all 0.5s ease;
    width: 100vw;
    background-color: white;
    z-index: 100003;
    position: relative;
    overflow-x: scroll;
    padding: 0px 20px;
    padding-top: 15px;
    max-width: 900px;
  `;
  const MenuSpan = styled.button<{ isSelected: boolean }>`
    border-radius: 16px;
    padding: 5px 10px;
    background-color: ${props => (props.isSelected ? 'black' : 'white')};
    color: ${props => (props.isSelected ? 'white' : 'black')};
    margin-right: 10px;
    border: 1px solid black;
    font-size: 18px;
    @media (max-width: 720px) {
      font-size: 2.5vw;
      border-radius: 3vw;
    }
  `;

  useEffect(() => {
    if (window.innerWidth > 720) setSlideUnit(720 / 150);
    else setSlideUnit(window.innerWidth / (window.innerWidth * 0.25));

    window.addEventListener('resize', () => {
      if (window.innerWidth > 720) setSlideUnit(720 / 150);
      else setSlideUnit(window.innerWidth / (window.innerWidth * 0.25));
    });
  }, []);

  console.log(maskDataArr);
  console.log(selectedMask);
  return (
    <Div>
      <div>
        {Object.keys(maskObj).map(type => (
          <MenuSpan
            onClick={() => {
              handleChangeMaskData(type);
            }}
            isSelected={maskObj[type] == maskDataArr}
          >
            {type}
          </MenuSpan>
        ))}
      </div>
      <Slider {...settings}>
        {maskDataArr.map((maskData: maskType, idx: number) => {
          return (
            <MaskComponent
              maskData={maskData}
              key={idx}
              idx={idx}
              handleChangeMask={handleChangeMask}
              selected={maskDataArr.indexOf(selectedMask) === idx}
            />
          );
        })}
      </Slider>
      {/* <Slide>
        {maskDataArr.map((maskData: maskType, idx: number) => {
          return (
            <MaskComponent
              maskData={maskData}
              key={idx}
              idx={idx}
              handleChangeMask={handleChangeMask}
              selected={maskDataArr.indexOf(selectedMask) === idx}
            />
          );
        })}
      </Slide> */}
    </Div>
  );
};

export default MaskSlider;
