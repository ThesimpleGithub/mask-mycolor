import EXIF from 'exif-js';
// import * as faceapi from '../../utils/face-api'
// import { throttling } from '../../utils/throttling';
import '@tensorflow/tfjs-backend-webgl';

import * as faceLandmarksDetection from '@tensorflow-models/face-landmarks-detection';
// import { model } from '../../pages/_app';
// import colorAvg from './colorAvg';
import MaskDraw from './drawMask';
import getDeviceType from './getDeviceType';

export default class canvasRotate {
  canvas: HTMLCanvasElement;
  fileInfo: any;
  image: HTMLImageElement | null;
  loading: HTMLElement | null;
  canvasContext: any;
  mode: any;
  isIosVer13: boolean | undefined;
  maskColor: any;
  model: any;
  constructor(
    canvas: HTMLCanvasElement,
    fileInfo: any,
    image: HTMLImageElement | null,
    mode: any,
  ) {
    this.canvas = canvas;
    this.fileInfo = fileInfo;
    this.model = faceLandmarksDetection.load(
      faceLandmarksDetection.SupportedPackages.mediapipeFacemesh,
      { maxFaces: 1 },
    );
    this.image = image;
    this.loading = document.getElementById('ML_Loading');
    this.canvasContext = this.canvas.getContext('2d');
    this.mode = mode;
    console.log(mode);
    if (this.mode == 'mask') this.maskImgLoad();
    else {
      this.rotate2(this.image, true);
    }
  }

  maskImgLoad() {
    const beige_left = new Image();
    const beige_right = new Image();
    const mint_left = new Image();
    const mint_right = new Image();
    const black_left = new Image();
    const black_right = new Image();
    const white_left = new Image();
    const purple_left = new Image();
    const white_right = new Image();
    const purple_right = new Image();
    const pink_left = new Image();
    const pink_right = new Image();

    beige_left.src = `${process.env.PATH}/images/beige-left.png`;
    beige_right.src = `${process.env.PATH}/images/beige-right.png`;
    mint_left.src = `${process.env.PATH}/images/mint-left.png`;
    mint_right.src = `${process.env.PATH}/images/mint-right.png`;
    black_left.src = `${process.env.PATH}/images/black-left.png`;
    black_right.src = `${process.env.PATH}/images/black-right.png`;
    white_left.src = `${process.env.PATH}/images/white-left.png`;
    white_right.src = `${process.env.PATH}/images/white-right.png`;
    purple_left.src = `${process.env.PATH}/images/purple-left.png`;
    purple_right.src = `${process.env.PATH}/images/purple-right.png`;
    pink_left.src = `${process.env.PATH}/images/pink-left.png`;
    pink_right.src = `${process.env.PATH}/images/pink-right.png`;

    this.maskColor = {
      white: [white_left, white_right],
      black: [black_left, black_right],
      pink: [pink_left, pink_right],
      purple: [purple_left, purple_right],
      beige: [beige_left, beige_right],
      mint: [mint_left, mint_right],
    };

    this.maskColor[store.getState().ColorReducer.mainMaskColor!][1].onload =
      () => this.rotate2(this.image, true);
  }

  async rotate2(image: any, predict: boolean) {
    console.log(image);
    const ua = navigator.userAgent;

    EXIF.getData(image, async () => {
      console.log(image);
      const orientation = EXIF.getTag(image, 'Orientation'); //회전도 구하기
      if (/ipad|iphone/i.test(ua)) {
        //ios환경
        let floatOs = 0;
        let osInfo;
        let realOs;
        if (ua.indexOf('FBSV') > -1) {
          //ios 버전 추출
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
          //버전이 13.4미만이면 회전 알고리즘 적용
          this.isIosVer13 = true;
          switch (orientation) {
            // @details 이미지 회전값이 0인경우 ( 정방향 )
            case undefined:
              await this.canvasContext.drawImage(
                image,
                0,
                0,
                this.canvas.width,
                this.canvas.height,
              );
              break;

            case 1:
              await this.canvasContext.drawImage(
                image,
                0,
                0,
                this.canvas.width,
                this.canvas.height,
              );
              break;

            case 3:
              await this.canvasContext.translate(
                this.canvas.width / 2,
                this.canvas.height / 2,
              );
              await this.canvasContext.rotate(Math.PI);
              await this.canvasContext.translate(
                -this.canvas.width / 2,
                -this.canvas.height / 2,
              );

              // @details 이미지가 180° 회전 했을 경우 x, y축의 값을 업로드 이미지의 넓이와 높이를 음수로 변경한다.

              await this.canvasContext.drawImage(
                image,
                0,
                0,
                this.canvas.width,
                this.canvas.height,
              );
              break;

            // @details 이미지 회전값이 270 기운 경우 ( 왼쪽으로 90 기운 경우 )
            case 6:
              if (this.canvas.width < this.canvas.height) {
                this.canvas.width = this.canvas.height;
              } else {
                this.canvas.height = this.canvas.width;
              }

              await this.canvasContext.translate(
                this.canvas.width / 2,
                this.canvas.height / 2,
              );
              await this.canvasContext.rotate(Math.PI * 0.5);
              await this.canvasContext.translate(
                -this.canvas.width / 2,
                -this.canvas.height / 2,
              );
              await this.canvasContext.drawImage(
                image,
                0,
                0,
                this.canvas.width,
                this.canvas.height,
              );

              // @details 이미지가 270° 회전 했을 경우 x축의 값을 업로드 이미지의 넓이를 음수로 변경한다.

              break;

            // @details 이미지 회전값이 90 기운 경우
            case 8:
              if (this.canvas.width < this.canvas.height) {
                this.canvas.width = this.canvas.height;
              } else {
                this.canvas.height = this.canvas.width;
              }

              await this.canvasContext.translate(
                this.canvas.width / 2,
                this.canvas.height / 2,
              );
              await this.canvasContext.rotate(Math.PI * 1.5);
              await this.canvasContext.translate(
                -this.canvas.width / 2,
                -this.canvas.height / 2,
              );
              await this.canvasContext.drawImage(
                image,
                0,
                0,
                this.canvas.width,
                this.canvas.height,
              );
              //회전하기전에 정사각형을 만들어주자.
              break;
          }
        } else
          await this.canvasContext.drawImage(
            image,
            0,
            0,
            this.canvas.width,
            this.canvas.height,
          );
      } else
        await this.canvasContext.drawImage(
          image,
          0,
          0,
          this.canvas.width,
          this.canvas.height,
        );

      console.log(predict);
      if (predict) this.rotate();
    });
  }
  async rotate() {
    // const throttler = throttling();
    const testWrapper = document.getElementById('testWrapper');
    const headerWrapper = document.getElementById('headerWrapper');
    this.image!.src = this.canvas.toDataURL();
    this.image!.onload = async () => {
      this.model.then(async (data: any) => {
        const predictions: any = await data.estimateFaces({
          input: this.canvas,
          returnTensors: false,
          flipHorizontal: false,
        });
        if (predictions.length === 0) {
          this.loading!.style.display = 'none';
          alert('얼굴이 인식되지 않습니다. 다른 사진으로 시도해주세요.');
        } else {
          if (this.mode != 'mask') {
            headerWrapper!.style.display = 'none';
            headerWrapper!.style.opacity = '0';
          }
          testWrapper!.style.opacity = '1';
          this.image!.style.display = 'block';

          const keypoints = predictions[0].scaledMesh;

          const positions = await keypoints.map((i: any[]) => {
            return { x: i[0], y: i[1] };
          });

          testWrapper!.insertBefore(this.canvas, testWrapper!.firstChild);
          if (this.isIosVer13) {
            await this.canvasContext.translate(
              this.canvas.width / 2,
              this.canvas.height / 2,
            );
            await this.canvasContext.rotate(Math.PI * 0.5);
            await this.canvasContext.translate(
              -this.canvas.width / 2,
              -this.canvas.height / 2,
            );
            await this.canvasContext.drawImage(
              this.image,
              0,
              0,
              this.canvas.width,
              this.canvas.height,
            );
          }
          // if (this.mode == 'scan') {
          //   //얼굴인식이 회전되기전의 좌표를 반납하기 때문에 다시 재회전
          //   document.getElementById('testExplain')!.innerText =
          //     '피부색을 추출 후 인공지능이 계산 중입니다.';
          //   await this.canvasContext.beginPath();
          //   await this.canvasContext.moveTo(
          //     positions[234].x + positions[234].x * -0.05,
          //     positions[10].y,
          //   );
          //   await this.canvasContext.lineTo(
          //     positions[454].x + positions[454].x * 0.05,
          //     positions[10].y,
          //   );
          //   await this.canvasContext.lineTo(
          //     positions[454].x + positions[454].x * 0.05,
          //     positions[152].y,
          //   );
          //   await this.canvasContext.lineTo(
          //     positions[234].x + positions[234].x * -0.05,
          //     positions[152].y,
          //   );
          //   await this.canvasContext.closePath();
          //   this.canvasContext.lineWidth = 3;
          //   this.canvasContext.strokeStyle = '#32EEDB';
          //   await this.canvasContext.stroke();

          //   const eyeLength = Math.abs(positions[4].y - positions[1].y);
          //   const rightCheek = positions[425];
          //   const leftCheek = {
          //     x: positions[205].x - eyeLength,
          //     y: positions[205].y,
          //   };
          //   const leftUnderEye = positions[110];

          //   const rightUnderEye = positions[252];

          //   const jaw = positions[201];

          //   const leftEyeSum: any = new getColorData(
          //     leftUnderEye,
          //     eyeLength,
          //     this.canvasContext,
          //   );
          //   const rightEyeSum: any = new getColorData(
          //     rightUnderEye,
          //     eyeLength,
          //     this.canvasContext,
          //   );
          //   const leftCheekSum: any = new getColorData(
          //     leftCheek,
          //     eyeLength,
          //     this.canvasContext,
          //   );
          //   const rightCheekSum: any = new getColorData(
          //     rightCheek,
          //     eyeLength,
          //     this.canvasContext,
          //   );
          //   const jawSum: any = new getColorData(
          //     jaw,
          //     eyeLength,
          //     this.canvasContext,
          //   );

          //   const eyeResult: number[] = leftEyeSum.map(
          //     (i: number, idx: number) => {
          //       return (i + rightEyeSum[idx]) / 2;
          //     },
          //   );

          //   const cheekResult: number[] = leftCheekSum.map(
          //     (i: number, idx: number) => {
          //       return (i + rightCheekSum[idx]) / 2;
          //     },
          //   );

          //   // eyeColor.push(eyeResult)
          //   // cheekColor.push(cheekResult)
          //   // jawColor.push(jawSum)
          //   this.canvasContext.fillStyle = `rgb(${
          //     (eyeResult[0] + cheekResult[0] + jawSum[0]) / 3
          //   },${(eyeResult[1] + cheekResult[1] + jawSum[1]) / 3},${
          //     (eyeResult[2] + cheekResult[2] + jawSum[2]) / 3
          //   })`;

          //   const rgbBox = (this.image!.height + this.image!.width) / 2 / 4;
          //   this.canvasContext.fillRect(0, 0, rgbBox, rgbBox);

          //   if (this.isIosVer13) this.reRotate();

          //   // const colorSum: { eye: number[]; cheek: number[]; jaw: number[] } =
          //   //   {
          //   //     eye: eyeResult,
          //   //     cheek: cheekResult,
          //   //     jaw: jawSum,
          //   //   };

          //   // const form = new FormData()
          //   // form.append("file", this.fileInfo)
          //   // axios.post('/sendImg', form)

          //   // throttler.throttle(() => {
          //   //   axios
          //   //     .post('/getSeason', colorSum)
          //   //     .then(res => {
          //   //       colorAvg(colorSum, res.data);
          //   //       // document.getElementById(res.data).click()
          //   //     })
          //   //     .catch(err => {
          //   //       console.log(err);
          //   //     });
          //   // }, 500);
          //   const form = new FormData();
          //   form.append('file', this.fileInfo);
          //   axios
          //     .post('/remove/sendImg', form)
          //     .then(res => {
          //       store.dispatch(
          //         //스토어에 퍼센테이지값 등록
          //         actionCreators.setSeasonPercent([
          //           res.data.left,
          //           res.data.right,
          //         ]),
          //       );
          //       document.getElementById(res.data.result)!.click();
          //     })
          //     .catch(err => {
          //       console.log(err.error);
          //       alert('에러가 발생했습니다. 다른 사진으로 시도해주세요.');
          //       window.location.reload();
          //     });
          // } else
          if (this.mode == 'faceboard') {
            store.dispatch(actionCreators.setScanStart(true));
            this.loading!.style.display = 'none';
            let colorRgb = store.getState().ColorReducer.mainFaceBoardColor;
            new FaceBoard(positions, colorRgb, this.canvas);
            if (this.isIosVer13) this.reRotate();

            setInterval(async () => {
              const boardColor =
                store.getState().ColorReducer.mainFaceBoardColor;
              if (colorRgb != boardColor) {
                colorRgb = boardColor;
                if (this.isIosVer13) {
                  this.canvas.style.display = 'none';
                  new FaceBoard(positions, colorRgb, this.canvas);
                  this.reRotate();
                } else new FaceBoard(positions, colorRgb, this.canvas);
              }
            }, 300);
          } else {
            const typeArr = getDeviceType();
            this.loading!.style.display = 'none';
            let mainColor =
              this.maskColor[store.getState().ColorReducer.mainMaskColor!];
            let leftMask = mainColor[0];
            let rightMask = mainColor[1];
            new MaskDraw(
              this.canvas,
              leftMask,
              rightMask,
              positions,
              typeArr[0],
              typeArr[1],
              typeArr[1],
            );
            // let camCanvas = document.createElement("canvas")
            // let ctx = camCanvas.getContext('2d')
            // if (this.isIosVer13) {
            //     camCanvas.className = "faceCanvas"
            //     camCanvas.style.position = 'absolute'
            //     camCanvas.style.zIndex = '998'
            //     camCanvas.style.left = '0'
            //     camCanvas.width = this.canvas.width
            //     camCanvas.height = this.canvas.height
            //     this.reRotate(ctx)
            // }

            if (this.isIosVer13) {
              setTimeout(() => {
                this.reRotate();
              }, 1000);
            }
            setInterval(() => {
              const maskColor =
                this.maskColor[store.getState().ColorReducer.mainMaskColor!];
              if (mainColor != maskColor) {
                mainColor = maskColor;
                leftMask = maskColor[0];
                rightMask = maskColor[1];
                if (this.isIosVer13) {
                  this.canvas.style.display = 'none';
                  new MaskDraw(
                    this.canvas,
                    leftMask,
                    rightMask,
                    positions,
                    typeArr[0],
                    typeArr[1],
                    typeArr[1],
                  );
                  setTimeout(() => {
                    this.reRotate();
                  }, 1000);
                }
                new MaskDraw(
                  this.canvas,
                  leftMask,
                  rightMask,
                  positions,
                  typeArr[0],
                  typeArr[1],
                  typeArr[1],
                );
              }
            }, 300);
          }
        }
      });

      // faceBoardCanvas = await faceapi.createCanvasFromMedia(this.image)
      // faceBoardCanvas.style.position = "absolute"
      // faceBoardCanvas.className = 'faceCanvas'
      // let detectionsWithLandmarks = await faceapi.detectAllFaces(this.image, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks(true)
      // if (detectionsWithLandmarks.length === 0) {
      //     this.loading.style.display = 'none'
      //     alert('얼굴이 인식되지 않습니다. 다른 사진으로 시도해주세요.')
      // }
      // else if (detectionsWithLandmarks.length > 1) {
      //     this.loading.style.display = 'none'
      //     alert("사진 속에 얼굴이 2개 이상 인식되었습니다. 혼자 찍은 사진을 올려주세요.")
      // }
      // else {
      //     await this.canvasContext.drawImage(this.image, 0, 0, this.canvas.width, this.canvas.height);
      //     this.image.style.display = 'block'
      //     document.getElementById("headerWrapper").style.display = "none"
      //     document.getElementById("testWrapper").style.display = "block"

      //     this.image.parentElement.insertBefore(faceBoardCanvas, this.image)
      //     const displaySize = { width: this.canvas.width, height: this.canvas.height }

      //     await faceapi.matchDimensions(faceBoardCanvas, displaySize)
      //     const resizedDetections = await faceapi.resizeResults(detectionsWithLandmarks, displaySize)
      //     const positions = resizedDetections[0].landmarks.positions
      //     if (!this.mode) {
      //         document.getElementById("testExplain").innerText = "피부색을 추출 후 인공지능이 계산 중입니다."

      //         faceapi.draw.drawFaceLandmarks(faceBoardCanvas, resizedDetections)
      //         let faceCtx = faceBoardCanvas.getContext('2d')

      //         const leftNose = positions[31]
      //         const leftChin = positions[2]
      //         const leftCheek = { x: (leftNose.x + leftChin.x) / 2, y: (leftNose.y + leftChin.y) / 2 }

      //         const rightNose = positions[35]
      //         const rightChin = positions[14]
      //         const rightCheek = { x: (rightNose.x + rightChin.x) / 2, y: (rightNose.y + rightChin.y) / 2 }

      //         const eyeLength = (positions[41].y - positions[37].y)
      //         const eyeMiddleX = (positions[40].x + positions[41].x) / 2
      //         const leftUnderEye = { x: eyeMiddleX, y: positions[41].y + eyeLength }

      //         const rightEyeMiddleX = (positions[46].x + positions[47].x) / 2
      //         const rightUnderEye = { x: rightEyeMiddleX, y: positions[46].y + eyeLength }

      //         const jaw = { x: positions[8].x, y: (positions[8].y + positions[57].y) / 2 }
      //         let colorSum = {}

      //         let leftEyeSum = new getColorData(leftUnderEye, eyeLength, this.canvasContext)
      //         let rightEyeSum = new getColorData(rightUnderEye, eyeLength, this.canvasContext)

      //         let leftCheekSum = new getColorData(leftCheek, eyeLength, this.canvasContext)
      //         let rightCheekSum = new getColorData(rightCheek, eyeLength, this.canvasContext)
      //         let jawSum = new getColorData(jaw, eyeLength, this.canvasContext)

      //         let faceCenterPos = positions[29]

      //         let leftFaceWidth = positions[1].x - faceCenterPos.x
      //         let rightFaceWidth = faceCenterPos.x - positions[15].x
      //         let noseToBottom = (positions[8].y - faceCenterPos.y) * 1.1
      //         let o1 = Math.atan((positions[15].y - (positions[15].y + positions[1].y) / 2) / (positions[15].x - positions[1].x))
      //         // let degree = Math.abs(o1 * 180/Math.PI)
      //         await faceCtx.save();
      //         await faceCtx.translate(faceCenterPos.x, faceCenterPos.y)
      //         await faceCtx.rotate(o1)
      //         await faceCtx.translate(-faceCenterPos.x, -faceCenterPos.y)
      //         // ctx.scale(-1,1)
      //         await faceCtx.drawImage(rightMask, faceCenterPos.x, faceCenterPos.y, -rightFaceWidth, noseToBottom)
      //         await faceCtx.drawImage(leftMask, faceCenterPos.x + 1, faceCenterPos.y, leftFaceWidth, noseToBottom)
      //         await faceCtx.restore()
      //         let eyeResult = await leftEyeSum.map((i, idx) => {
      //             return i + rightEyeSum[idx]
      //         })

      //         let cheekResult = await leftCheekSum.map((i, idx) => {
      //             return i + rightCheekSum[idx]
      //         })
      //         colorSum.eye = eyeResult.map(i => i /= 2)
      //         colorSum.cheek = cheekResult.map(i => i /= 2)
      //         colorSum.jaw = jawSum

      //         for (let key in colorSum) {
      //             colorSum[key] = colorSum[key].map(i => i / 30)
      //         }
      //         throttler.throttle(() => {
      //             axios.post('https://tensor-server.herokuapp.com/getSeason', colorSum)
      //                 .then(res => {
      //                     document.getElementById(res.data).click()
      //                 })
      //                 .catch(err => {
      //                     console.log(err)
      //                 })
      //         }, 500)
      //     } else {
      //         this.loading.style.display = 'none'
      //         setInterval(() => {
      //             let colorRgb = store.getState().ColorReducer.mainFaceBoardColor
      //             new FaceBoard(positions, colorRgb, faceBoardCanvas)
      //         }, 300);
      //     }
      // }
    };
  }
  reRotate() {
    const reRotateImg = new Image();
    reRotateImg.src = this.canvas.toDataURL();
    reRotateImg.onload = () => {
      this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.canvas.style.display = 'block';
      this.rotate2(reRotateImg, false);
    };
  }
}
