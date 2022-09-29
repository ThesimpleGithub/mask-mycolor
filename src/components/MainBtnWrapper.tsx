import { ReactElement } from 'react';
// import SelfMode from './SelfMode';
import UploadMode from './UploadMode';
import VideoMode from './VideoMode';

const MainBtnWrapper = (): ReactElement => {
  return (
    <section>
      <VideoMode />
      <UploadMode />
      {/* <SelfMode /> */}
    </section>
  );
};

export default MainBtnWrapper;
