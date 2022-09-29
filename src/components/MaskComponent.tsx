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
  width: 122px;
  box-sizing: content-box;
  height: 122px;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
  font-size: 11px;
  cursor: pointer;
  @media (max-width: 720px) {
    font-size: 1.52;
    width: 21vw;
    height: 21vw;
    margin-top: 2.8vw;
    margin-bottom: 2.8vw;
  }
  ${theme.borderRadius}
  z-index: 100003;
`;
const Img = styled.img`
  width: 110px;
  margin-top: 5px;
  @media (max-width: 720px) {
    width: 15.28vw;
  }
`;

const Shopping = styled.button`
  background: none;
  position: absolute;
  top: 3px;
  right: 3px;
  @media (max-width: 720px) {
    font-size: 3.5vw;
  }
  font-size: 20px;
`;

const Span = styled.span`
  font-size: 13px;
  @media (max-width: 720px) {
    font-size: 1.8vw;
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
    beforeSelect!.style.border = 'none';
    // beforeSelect!.style.background = 'rgba(230,230,230,0.2)';
    beforeSelect!.id = '';
    const target = node.currentTarget;
    target.id = 'selectedMask';
    target.style.border = '3px solid pink';
    // target.style.background = 'lightblue';
  };

  return (
    <Div
      style={{ border: selected ? '3px solid pink' : '' }}
      id={selected ? 'selectedMask' : ''}
      className="maskWrapper"
      onClick={maskToggle}
    >
      <Shopping
        onClick={e => {
          e.stopPropagation();
          window.open('naver.com');
        }}
      >
        <FaShoppingCart />
      </Shopping>
      <Img src={`/images/${maskData.src}`} />
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
