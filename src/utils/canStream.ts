import ImageUpload from './ImageUpload';

export default async function canStream(
  faceBoard: string,
): Promise<void | MediaStream> {
  const ua = navigator.userAgent;
  let videoStream;

  if (/fb/i.test(ua) && !/fbios/i.test(ua)) {
    let floatOs = 0;
    let osInfo;
    let realOs;
    if (ua.indexOf('FBSV') > -1) {
      osInfo = ua.split('FBSV')[1];
      realOs = osInfo.substring(1, 3) + '.' + osInfo.substring(4, 5);
      floatOs = parseFloat(realOs);
    } else {
      osInfo = ua.split('OS')[1];
      realOs = osInfo.substring(1, 3) + '.' + osInfo.substring(4, 5);

      //ios버전 추출해서 실수형으로.
      floatOs = parseFloat(realOs);
    }
    if (floatOs < 13.4) {
      window.open('x-web-search://?mycolor.kr');
    }
  }
  if (localStorage.getItem('isScanPossible') === 'false') {
    if (
      confirm(
        '기기의 사양이 좋지 않아 원활한 측정이 힘듭니다. 확인을 누르시면 이미지 업로드 방식으로 전환합니다. 취소를 누르시면 그대로 진행합니다.',
      )
    ) {
      noCam();
    }
  }
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    //사파리는 해상도가 자동으로 조절되기때문에 해상도를 설정해주면 에러가난다. 그래서 사파리는 설정을 안해줘야하는데,
    //기기 정보를 받아올때 크롬에는 사파리 크롬이 다 적혀있고, 사파리에는 사파리만 적혀있으므로 사파리를 특정하기 위해서는
    //사파리 문자를 포함하고 크롬 문자를 포함하지않는 조건을 충족시켜줘야한다
    try {
      const ratio = (innerWidth * 4) / 3;
      if (ua.indexOf('Safari') != -1 && ua.indexOf('Chrome') == -1) {
        return await navigator.mediaDevices.getUserMedia({
          video: {
            aspectRatio: 1.33,
            // width: innerWidth,
            // height: ratio,
            facingMode: 'user',
            frameRate: {
              ideal: 60,
            },
          },
        });
      } else {
        // Not adding `{ audio: true }` since we only want video now
        return await navigator.mediaDevices.getUserMedia({
          video: {
            aspectRatio: 1.33,
            // width: innerWidth,
            // height: ratio,
            frameRate: {
              ideal: 60,
            },
            facingMode: 'user',
          },
        });
      }
    } catch (error: any) {
      noCam(error);
    }
  }
  // else if (navigator.getUserMedia) {
  //   // Standard

  //   navigator.getUserMedia(
  //     {
  //       video: {
  //         width: { min: 0, ideal: 1280, max: 2560 },
  //         height: { min: 0, ideal: 894, max: 1788 },
  //         facingMode: 'user',
  //       },
  //     },
  //     function (stream) {
  //       video.src = stream;
  //       video.play();
  //       StreamCanvas(faceBoard);
  //     },
  //     err => {
  //       err += '';
  //       noCam(err);
  //     },
  //   );
  // } else if (navigator.webkitGetUserMedia) {
  //   // WebKit-prefixed

  //   navigator.webkitGetUserMedia(
  //     {
  //       video: {
  //         width: { min: 0, ideal: 1280, max: 2560 },
  //         height: { min: 0, ideal: 894, max: 1788 },
  //         facingMode: 'user',
  //       },
  //     },
  //     function (stream) {
  //       video.src = window.webkitURL.createObjectURL(stream);
  //       video.play();
  //       StreamCanvas(faceBoard);
  //     },
  //     err => {
  //       err += '';
  //       noCam(err);
  //     },
  //   );
  // } else if (navigator.mozGetUserMedia) {
  //   // Mozilla-prefixed

  //   navigator.mozGetUserMedia(
  //     {
  //       video: {
  //         width: { min: 0, ideal: 1280, max: 2560 },
  //         height: { min: 0, ideal: 894, max: 1788 },
  //         facingMode: 'user',
  //       },
  //     },
  //     function (stream) {
  //       video.srcObject = stream;
  //       video.play();
  //       StreamCanvas(faceBoard);
  //     },
  //     err => {
  //       err += '';
  //       noCam(err);
  //     },
  //   );
  // }
  else {
    noCam();
  }

  function noCam(err = 'default') {
    document.getElementById('testExplain')!.innerText = err;
    // loading.style.display = 'none';
    if (faceBoard != 'scan') {
      ImageUpload(faceBoard);
    }
    const isMobile = /mobile/i.test(ua);
    if (/crios/i.test(ua))
      alert('지원하지 않는 브라우저입니다. safari로 접속해주세요.');
    else if (/denied/i.test(err)) {
      if (/kakaotalk/i.test(ua)) {
        if (
          confirm(
            '지원하지 않는 브라우저거나 카메라 권한을 차단하셨습니다. 외부 브라우저로 연결하시겠습니까?',
          )
        ) {
          if (/iphone|ipad/i.test(ua)) {
            window.open('https://urlopen.link/mycolor.kr');
          } else
            window.open(
              'intent://mycolor.kr#Intent;scheme=http;package=com.android.chrome;end',
            );
        }
      } else
        alert(
          '카메라 권한을 차단하셨습니다. 브라우저 설정에서 허용으로 바꿔주세요.',
        );
    } else if (isMobile) {
      if (
        confirm(
          '지원하지 않는 브라우저거나 카메라 권한을 차단하셨습니다. 외부 브라우저로 연결하시겠습니까?',
        )
      ) {
        if (/iphone|ipad/i.test(ua)) {
          window.open('https://urlopen.link/mycolor.kr');
        } else
          window.open(
            'intent://mycolor.kr#Intent;scheme=http;package=com.android.chrome;end',
          );
      }
    } else {
      ImageUpload(faceBoard);
    }
  }
}
