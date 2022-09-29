import canvasRotate from './canvasRotate';
import axios from 'axios';

export default function ImageUpload(faceBoard: string): void {
  const imageInput = document.getElementById('imageInput') as HTMLInputElement;
  const ML_Loading = document.getElementById('ML_Loading') as HTMLDivElement;
  imageInput.onclick = () => (imageInput.value = '');
  imageInput.onchange = (input: Event) => {
    const target = input.target as HTMLInputElement;
    if (target.files && target.files[0]) {
      const fileInfo = target.files[0];
      const reader = new FileReader();
      reader.onload = async function (e: Event) {
        if (faceBoard !== 'scan') {
          // ML_Loading.style.display = 'block';
          const input = document.getElementById(
            'faceImage',
          ) as HTMLImageElement;
          const imageTarget = e.target as FileReader;
          input.src = imageTarget.result as string;
          input.onload = async () => {
            const camCanvas = document.createElement('canvas');
            camCanvas.className = 'faceCanvas';
            camCanvas.style.position = 'absolute';
            camCanvas.style.zIndex = '998';
            camCanvas.style.left = '0';
            camCanvas.width = input.width;
            camCanvas.height = input.height;
            new canvasRotate(camCanvas, fileInfo, input, faceBoard);
            // camCanvas.getContext('2d').drawImage(input, 0, 0, input.width, input.height)
          };
        } else scan(fileInfo);
      };
      reader.readAsDataURL(fileInfo);
    }
  };

  imageInput.click();
  return;

  function scan(fileInfo: File) {
    const timeNotice = ML_Loading!.firstElementChild!
      .lastElementChild as HTMLSpanElement;
    const testNotice = ML_Loading!.firstElementChild!
      .children[1] as HTMLSpanElement;

    timeNotice.innerText = '최대 10초 정도 소요됩니다.';
    testNotice.innerText = '퍼스널컬러를 측정 중입니다.';
    ML_Loading.style.display = 'block';

    if (!fileTypeCheck(fileInfo.name)) {
      ML_Loading.style.display = 'none';
      return;
    }
    const data = new FormData();
    data.append('file', fileInfo);

    axios
      .post('/remove/sendImg', data)
      .then(res => {
        localStorage.setItem('faceData', JSON.stringify(res.data));
        document.getElementById(res.data.result)!.click();
      })
      .catch(err => {
        if (err.response.data.code === 1)
          alert('얼굴이 인식되지 않습니다. 다른 사진으로 시도해주세요.');
        else
          alert(
            '얼굴을 기울이지 않고 정면을 응시한 사진으로 다시 시도해주세요.',
          );
        ML_Loading.style.display = 'none';
      });
    // try {
    //   const input = document.getElementById(
    //     'faceImage',
    //   ) as HTMLImageElement;
    //   const imageTarget = e.target as FileReader;
    //   input.src = imageTarget.result as string;
    //   input.onload = async () => {
    //     const camCanvas = document.createElement('canvas');
    //     camCanvas.className = 'faceCanvas';
    //     camCanvas.style.position = 'absolute';
    //     camCanvas.style.zIndex = '998';
    //     camCanvas.style.left = '0';
    //     camCanvas.width = input.width;
    //     camCanvas.height = input.height;
    //     new canvasRotate(camCanvas, fileInfo, input, faceBoard);
    //     // camCanvas.getContext('2d').drawImage(input, 0, 0, input.width, input.height)
    //   };
    // } catch (error) {
    //   console.log(error);
    // }

    // loading.style.display = "none"
  }
}

function fileTypeCheck(obj: string) {
  const pathpoint = obj.lastIndexOf('.');

  const filepoint = obj.substring(pathpoint + 1, obj.length);

  const filetype = filepoint.toLowerCase();

  if (!(filetype == 'jpg' || filetype == 'png' || filetype == 'jpeg')) {
    alert('jpg, jpeg, png  확장자만 가능합니다.');
    return false;
  }
  return true;
}
