import { ReactElement } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 100004;
  top: 0;
`;

const Wrapper = styled.div`
  flex-direction: column;
  align-items: center;
  padding: 25px;
  position: fixed;
  left: 50%;
  display: flex;
  top: 50%;
  transform: translate(-50%, -50%);
  background: white;
  box-shadow: 1px 1px 4px gray;
  white-space: nowrap;
`;

const Title = styled.span`
  color: black;
  font-size: 16px;
  margin-top: 15px;
  margin-bottom: 3px;
`;
const ML_Loading = ({
  title,
  text,
}: {
  title: string;
  text: string;
}): ReactElement => {
  return (
    // 인공지능 불러오기 전 로딩 박스
    <Container id="ML_Loading">
      <Wrapper>
        <img width="65px" src={'/images/loading.gif'} />
        <Title>{title}</Title>
        <span>{text}</span>
      </Wrapper>
    </Container>
  );
};

export default ML_Loading;
