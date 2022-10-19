import styled from 'styled-components';
// import Button from '@material-ui/core/Button';
import { ReactElement } from 'react';
import { maskType } from '../datas/maskData';
import theme from '../utils/theme';
import { RiShoppingBagFill } from 'react-icons/ri';
import { FaShoppingCart } from 'react-icons/fa';
const Div = styled.div`
  position: relative;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 150px;
  height: 150px;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
  font-size: 11px;
  margin-left: 3px;
  cursor: pointer;
  @media (orientation: portrait) and (max-width: 720px),
    (orientation: landscape) and (max-height: 720px) {
    font-size: 1.52;
    width: 21vmin;
    height: 21vmin;
    margin-top: 2.8vmin;
    margin-bottom: 2.8vmin;
  }
  ${theme.borderRadius}
  z-index: 100003;
`;
const Img = styled.img`
  width: 110px;
  height: 80px;
  margin-top: 5px;
  /* @media all and ((orientation: portrait) and (max-width: 720px)),
    ((orientation: landscape) and (max-height: 720px)) {
    width: 15.28vmin;
  } */
  @media (orientation: portrait) and (max-width: 720px),
    (orientation: landscape) and (max-height: 720px) {
    width: 15.28vmin;
    height: 12vmin;
  }
`;

const Shopping = styled.button`
  background: none;
  color: black;
  position: absolute;
  padding: 0;
  top: 5px;
  right: 5px;
  @media (orientation: portrait) and (max-width: 720px),
    (orientation: landscape) and (max-height: 720px) {
    font-size: 3.5vmin;
  }
  font-size: 26px;
`;

const Span = styled.span`
  font-size: 13px;
  @media ((orientation: portrait) and (max-width: 720px)),
    ((orientation: landscape) and (max-height: 720px)) {
    font-size: 1.8vmin;
  }
`;

interface props {
  maskData: maskType;
  idx: number;
  handleChangeMask(arg0: number): void;
  selected: boolean;
}

const MaskComponent = ({
  maskData,
  idx,
  handleChangeMask,
  selected,
}: props): ReactElement => {
  const maskToggle = (node: { currentTarget: HTMLDivElement }) => {
    handleChangeMask(idx);
    const beforeSelect = document.getElementById('selectedMask');
    beforeSelect!.style.boxShadow = 'none';
    // beforeSelect!.style.background = 'rgba(230,230,230,0.2)';
    beforeSelect!.id = '';
    const target = node.currentTarget;
    target.id = 'selectedMask';
    target.style.boxShadow = '0 0 0pt 2pt #db4c64';
    // target.style.background = 'lightblue';
  };

  return (
    <Div
      style={{ boxShadow: selected ? '0 0 0pt 2.5pt #db4c64' : '' }}
      id={selected ? 'selectedMask' : ''}
      className="maskWrapper"
      onClick={maskToggle}
    >
      <Shopping
        onClick={e => {
          e.stopPropagation();
          window.open(maskData.href);
        }}
      >
        <FaShoppingCart />
      </Shopping>
      <Img data-src={`images/${maskData.src}`} className="lazy" />
      {/* <Btn
        // variant="contained"
        color="primary"
        onClick={(e: any) => {
          e.stopPropagation();
          // window.open(data.href);
          alert('출시 전 테스트 중입니다.');
        }}
      >
        사러가기
      </Btn> */}
    </Div>
  );
};

export default MaskComponent;
