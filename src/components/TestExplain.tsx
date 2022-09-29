import { ReactElement } from 'react';
import styled from 'styled-components';
import theme from '../utils/theme';
export interface props {
  children?: string;
  bg?: string;
  color?: string;
}

const Wrapper = styled.div<props>`
  white-space: pre-wrap;
  background: ${props => props.bg};
  padding: 1.5vh 2vh;
  color: ${props => props.color};
  width: 100%;
  font-size: 1.7vh;
  margin-top: 0.5vh;
  margin-bottom: 1vh;
  text-align: center;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  @media (max-width: 720px) {
    padding: 2vw 4.17vw;
    font-size: 2.42vw;
  }
  ${theme.borderRadius}
`;

const TestExplain = ({
  bg = 'rgb(230 230 230)',
  color = 'black',
  children,
}: props): ReactElement => {
  return (
    <Wrapper id="testExplain" bg={bg} color={color}>
      {/* {children} */}
      테스트를 진행중입니다. 잠시만 기다려주세요
    </Wrapper>
  );
};

export default TestExplain;
