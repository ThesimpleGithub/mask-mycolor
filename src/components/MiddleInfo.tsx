import styled from 'styled-components';

const Div = styled.div`
  font-size: 1.9vh;
  margin-top: 7.5vh;
  margin-bottom: 3.13vh;
  text-align: center;
  line-height: 2.5vh;
  @media (max-height: 513px) {
    font-size: 9px;
    line-height: 15px;
  }
`;
const Bold = styled.span`
  font-weight: 700;
`;
const Span = styled.span`
  font-weight: 400;
`;
const MiddleInfo = () => {
  // const a = html`<div className="name" id="id">
  //   jaehoon<span>id</span><span>id</span> <span>id</span> <span>id</span
  //   ><span>id</span><span>id</span><span>id</span><span>id</span><span>id</span
  //   ><span>id</span>
  //   <span>id</span>
  // </div>`;
  return (
    <Div>
      <Bold>인공지능</Bold>
      <Span>이 퍼스널컬러를 측정 후</Span>
      <br />
      <Span>추천한 마스크를</Span>
      <Bold> 가상으로 착용해보세요</Bold>
    </Div>
  );
};

export default MiddleInfo;
