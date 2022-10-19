import { useEffect, ReactElement, useState } from 'react';
import MaskComponent from './MaskComponent';
import styled from 'styled-components';
import { maskObj, maskType } from '../datas/maskData';
import ScrollContainer from 'react-indiana-drag-scroll';
import { useRef } from 'react';

interface props {
  maskDataArr: maskType[];
  handleChangeMaskData(arg0: number): void;
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

  const menuElemArr = useRef<HTMLButtonElement[]>([]);
  const isNeedScroll = useRef<boolean>(false);
  const scrollX = useRef<number>(0);

  const ScrollDiv = styled(ScrollContainer)`
    white-space: nowrap;
  `;
  const Div = styled.article`
    transition: all 0.5s ease;
    width: 100vw;
    background-color: white;
    z-index: 100003;
    position: relative;
    padding: 0px 20px;
    max-width: 900px;
    padding-top: 15px;
    @media (orientation: portrait) and (max-width: 720px),
      (orientation: landscape) and (max-height: 720px) {
      padding-top: 2vmin;
    }
  `;
  const MenuSpan = styled.button<{ isSelected: boolean }>`
    border-radius: 16px;
    padding: 5px 10px;
    background-color: ${props => (props.isSelected ? 'black' : 'white')};
    color: ${props => (props.isSelected ? 'white' : 'black')};
    margin-right: 10px;
    border: 1px solid black;
    font-size: 18px;
    @media (orientation: portrait) and (max-width: 720px),
      (orientation: landscape) and (max-height: 720px) {
      font-size: 2.5vmin;
      border-radius: 3vmin;
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
  useEffect(() => {
    const selectedIdx = maskObj.findIndex(value => value.list == maskDataArr);
    const selectedElem = menuElemArr.current[selectedIdx];
    if (isNeedScroll.current)
      selectedElem.scrollIntoView({
        block: 'nearest',
        inline: 'center',
      });
    else selectedElem.parentElement!.scrollTo(scrollX.current, 0);
  }, [maskDataArr]);

  const handleMenuClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    idx: number,
  ) => {
    const selectedElem = e.currentTarget;
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(i => {
        if (i.intersectionRatio < 1) isNeedScroll.current = true;
        else {
          isNeedScroll.current = false;
          scrollX.current = i.target.parentElement!.scrollLeft;
        }
        handleChangeMaskData(idx);
        observer.disconnect();
      });
    });
    observer.observe(selectedElem);
  };

  return (
    <Div>
      <ScrollDiv>
        {maskObj.map((obj, idx) => (
          <MenuSpan
            ref={el => (menuElemArr.current[idx] = el!)}
            onClick={e => handleMenuClick(e, idx)}
            isSelected={maskObj[idx].list == maskDataArr}
          >
            {obj.name}
          </MenuSpan>
        ))}
      </ScrollDiv>
      <ScrollDiv>
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
      </ScrollDiv>
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
