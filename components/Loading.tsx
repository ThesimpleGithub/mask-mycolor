import { ReactElement } from 'react';
import styled from 'styled-components';

const Img = styled.img`
  width: 65px;
  z-index: 999;
  display: none;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
const Loading = (): ReactElement => {
  return (
    <div>
      <Img id="loading" src={'/images/loading.gif'} />
    </div>
  );
};

export default Loading;
