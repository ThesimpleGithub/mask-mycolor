import { ReactElement } from 'react';
import styled from 'styled-components';

const P = styled.h1`
  font-size: 3.3vh;
  margin-bottom: 1.56vh;
  font-weight: 400;
  font-family: 'Dongle';
  @media (max-height: 513px) {
    font-size: 13px;
  }
`;

const P2 = styled.p`
  font-size: 3.4vh;
  font-weight: 600;
  @media (max-height: 513px) {
    font-size: 15px;
  }
`;

const Head = styled.header`
  margin-top: 7vh;
  margin-bottom: 3.9vh;
  text-align: center;
`;

const Header = (): ReactElement => {
  return (
    <Head>
      <P>나에게 어울리는 마스크는 뭘까?</P>
      <P2>퍼스널 컬러 마스크 추천</P2>
    </Head>
  );
};

export default Header;
