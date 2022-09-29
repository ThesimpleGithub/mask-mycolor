import MainBtn from './MainBtn';
import ImageUpload from '../utils/ImageUpload';
import { ReactElement } from 'react';

const UploadMode = (): ReactElement => {
  return (
    <MainBtn.Wrapper
      onClick={() => {
        const ua = navigator.userAgent;
        if (/fb|instagram/i.test(ua) && !/iphone|ipad/i.test(ua)) {
          alert('원활한 측정을 위해 기본 브라우저로 이동합니다.');
          window.open(
            'intent://mycolortest.ml#Intent;scheme=http;package=com.android.chrome;end',
          );
          return;
        }
        ImageUpload('scan');
      }}
    >
      <MainBtn.MiddleWrapper>
        <MainBtn.ImgWrapper>
          <MainBtn.CamImg alt="camera 카메라" src={`/images/upload.svg`} />
        </MainBtn.ImgWrapper>
        <MainBtn.TextWrapper>
          <MainBtn.H1>사진 업로드 방식</MainBtn.H1>
          <MainBtn.P>사진은 저장되지 않습니다.</MainBtn.P>
        </MainBtn.TextWrapper>
      </MainBtn.MiddleWrapper>
    </MainBtn.Wrapper>
  );
};

export default UploadMode;
