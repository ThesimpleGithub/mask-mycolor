import getDeviceType from './getDeviceType';
import drawParent from './drawParent';
import { maskType } from '../datas/maskData';

export default class drawMask extends drawParent {
  leftMask!: HTMLImageElement;
  rightMask!: HTMLImageElement;
  // positions: { x: number; y: number }[];
  shortHeight: boolean;
  shortWidth: boolean;
  isPC: boolean;
  constructor() {
    super();
    this.leftMask = new Image();
    this.rightMask = new Image();
    [this.shortHeight, this.shortWidth, this.isPC] = getDeviceType();
  }

  setMaskImage(mask: maskType) {
    console.log(mask.left);
    this.leftMask.src = `/images/${mask.left}`;
    this.rightMask.src = `/images/${mask.right}`;
  }

  draw(positions: number[][]): void {
    const faceCenterPos = positions[195];
    let leftFaceWidth;
    let rightFaceWidth;
    const faceWidth = Math.sqrt(
      Math.pow(Math.abs(positions[117][0] - positions[346][0]), 2) +
        Math.pow(Math.abs(positions[117][1] - positions[346][1]), 2),
    );
    const o1 = Math.atan(
      (positions[145][1] - positions[374][1]) /
        (positions[145][0] - positions[374][0]),
    ); // 각도 계산
    const degree = (o1 * 180) / Math.PI;
    let noseToBottom;
    // 311 240 366 325
    // 313 153 377 193
    //안드로이드 왼쪽으로 기울이면 왼쪽으로 마스크가 더 간다.
    //아이폰 13.4이상 왼쪾으로 기울이면 오른쪽이 길어짐
    const afterRotateY = Math.abs(degree * (faceWidth * 0.001));
    // let afterRotateX = -1*(degree*(faceWidth * 0.003))
    // let afterRotateWidth = Math.abs(degree) * (faceWidth * 0.003)
    // let afterRotateHeight = Math.abs(degree) * (faceWidth * 0.003)
    if (this.shortHeight)
      noseToBottom =
        Math.sqrt(
          Math.pow(Math.abs(positions[152][0] - faceCenterPos[0]), 2) +
            Math.pow(Math.abs(positions[152][1] - faceCenterPos[1]), 2),
        ) * 1.25;
    //코부터 턱끝 길이
    else
      noseToBottom =
        Math.sqrt(
          Math.pow(Math.abs(positions[152][0] - faceCenterPos[0]), 2) +
            Math.pow(Math.abs(positions[152][1] - faceCenterPos[1]), 2),
        ) * 1.05; //코부터 턱끝 길이

    if (this.shortWidth) {
      leftFaceWidth =
        -Math.sqrt(
          Math.pow(Math.abs(positions[234][0] - faceCenterPos[0]), 2) +
            Math.pow(Math.abs(positions[234][1] - faceCenterPos[1]), 2),
        ) * 1.1; //왼쪽 볼 넓이
      rightFaceWidth =
        Math.sqrt(
          Math.pow(Math.abs(positions[454][0] - faceCenterPos[0]), 2) +
            Math.pow(Math.abs(positions[454][1] - faceCenterPos[1]), 2),
        ) * 1.2; //오른쪽 볼 넓이
    } else {
      leftFaceWidth = -Math.sqrt(
        Math.pow(Math.abs(positions[234][0] - faceCenterPos[0]), 2) +
          Math.pow(Math.abs(positions[234][1] - faceCenterPos[1]), 2),
      ); //왼쪽 볼 넓이
      rightFaceWidth = Math.sqrt(
        Math.pow(Math.abs(positions[454][0] - faceCenterPos[0]), 2) +
          Math.pow(Math.abs(positions[454][1] - faceCenterPos[1]), 2),
      ); //오른쪽 볼 넓이
    }
    // faceCenterPos[1] = faceCenterPos[1] + Math.abs(o1 * (faceWidth / 13))
    if (
      leftFaceWidth > faceWidth * 0.1 ||
      Math.abs(leftFaceWidth) <= faceWidth * 0.1 ||
      faceCenterPos[0] < positions[234][0]
    ) {
      //완전 옆면을 보일 시에 볼의 좌표가 코를 넘어가기 때문에 길이를 고정해준다.
      leftFaceWidth = faceWidth * -0.3;
      if (this.shortWidth) faceCenterPos[0] -= faceWidth * 0.15; //아이폰 13.4이상 중심점 조정
    } else if (
      leftFaceWidth > faceWidth * 0.2 ||
      Math.abs(leftFaceWidth) <= faceWidth * 0.2
    ) {
      //완전 옆면을 보일 시에 볼의 좌표가 코를 넘어가기 때문에 길이를 고정해준다.
      leftFaceWidth = faceWidth * -0.3;
      if (this.shortWidth) faceCenterPos[0] -= faceWidth * 0.1;
    } else if (
      leftFaceWidth > faceWidth * 0.3 ||
      Math.abs(leftFaceWidth) <= faceWidth * 0.3
    ) {
      leftFaceWidth = faceWidth * -0.4;
      if (this.shortWidth) faceCenterPos[0] -= faceWidth * 0.05;
    } else if (
      leftFaceWidth > faceWidth * 0.5 ||
      Math.abs(leftFaceWidth) <= faceWidth * 0.5
    ) {
      leftFaceWidth = faceWidth * -0.5;
    }

    if (
      rightFaceWidth <= faceWidth * 0.1 ||
      faceCenterPos[0] > positions[454][0]
    ) {
      //완전 옆면을 보일 시에 볼의 좌표가 코를 넘어가기 때문에 길이를 고정해준다.
      rightFaceWidth = faceWidth * 0.3;
      if (this.shortWidth) faceCenterPos[0] += faceWidth * 0.15;
    } else if (rightFaceWidth <= faceWidth * 0.2) {
      //완전 옆면을 보일 시에 볼의 좌표가 코를 넘어가기 때문에 길이를 고정해준다.
      rightFaceWidth = faceWidth * 0.3;
      if (this.shortWidth) faceCenterPos[0] += faceWidth * 0.1;
    } else if (rightFaceWidth <= faceWidth * 0.3) {
      rightFaceWidth = faceWidth * 0.4;
      if (this.shortWidth) faceCenterPos[0] += faceWidth * 0.05;
    } else if (rightFaceWidth <= faceWidth * 0.5) {
      rightFaceWidth = faceWidth * 0.5;
    }
    if (this.shortWidth) {
      //아이폰 13.4이상 회전시 길이 조정
      if (o1 > 0) leftFaceWidth += Math.abs(o1 * (faceWidth * 0.2));
      else rightFaceWidth += o1 * (faceWidth * 0.2);
    }

    if (!this.isPC && !this.shortHeight && !this.shortWidth) {
      //안드로이드 기기 중심점 조정
      faceCenterPos[0] += o1 * (faceWidth / 5) * -1;
    }

    //마스크 드로잉
    this.ctx.save();
    this.ctx.translate(faceCenterPos[0], faceCenterPos[1]); //기준점 잡기. 드로우가 시작되는 좌표를 기준점으로 잡아야 그려지는 부분만 회전이 가능
    this.ctx.rotate(o1);
    this.ctx.translate(-faceCenterPos[0], -faceCenterPos[1]); //이후에 이미지를 원하는 위치에 그리기 위해 다시 초기화해줌
    // ctx.scale(-1,1)
    this.ctx.drawImage(
      this.leftMask,
      faceCenterPos[0] + 1,
      faceCenterPos[1],
      leftFaceWidth,
      noseToBottom + afterRotateY,
    );
    this.ctx.drawImage(
      this.rightMask,
      faceCenterPos[0],
      faceCenterPos[1],
      rightFaceWidth,
      noseToBottom + afterRotateY,
    );
    this.ctx.restore();
  }
}

// export default class MaskDraw {
//     canvas: any
//     leftMask: HTMLImageElement
//     rightMask: HTMLImageElement
//     positions: any
//     ctx: any
//     shortHeight: boolean
//     shortWidth: boolean
//     constructor(canvas: any, leftMask: HTMLImageElement, rightMask: HTMLImageElement, positions: any, shortHeight: boolean, shortWidth: boolean) {
//         this.canvas = canvas
//         this.ctx = this.canvas.getContext('2d')
//         this.leftMask = leftMask
//         this.rightMask = rightMask
//         positions = positions
//         this.shortHeight = shortHeight
//         this.shortWidth = shortWidth
//         document.getElementById("maskBtn")!.style.display = "none"
//         this.draw()
//     }

//     async draw() {
//         await this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
//         let faceCenterPos = positions[195]
//         let leftFaceWidth
//         let rightFaceWidth
//         let faceWidth = Math.sqrt((Math.pow(positions[117][0] - positions[346][0],2) + Math.pow(positions[117][1] - positions[346][1],2)))
//         let o1 = Math.atan(((positions[117][1] - positions[346][1]) * .7) / (positions[117][0] - positions[346][0])) // 각도 계산
//         let degree = o1 * 180 / Math.PI
//         let noseToBottom
//         let afterRotateY = -1*degree*(faceWidth * 0.003)
//         let afterRotateWidth = Math.abs(degree) * (faceWidth * 0.0055)
//         let afterRotateHeight = Math.abs(degree) * (faceWidth * 0.010)
//         if (this.shortHeight)
//             noseToBottom = (positions[152][1] - faceCenterPos[1]) * 1.2//코부터 턱끝 길이
//         else
//             noseToBottom = positions[152][1] - faceCenterPos[1]//코부터 턱끝 길이

//         if (this.shortWidth) {
//             leftFaceWidth = (positions[117][0] - faceCenterPos[0]) * 1.4 //왼쪽 볼 넓이
//             rightFaceWidth = (positions[346][0] - faceCenterPos[0]) * 1.5 //오른쪽 볼 넓이
//         }
//         else {
//             leftFaceWidth = (positions[117][0] - faceCenterPos[0]) * 1.3 //왼쪽 볼 넓이
//             rightFaceWidth = (positions[346][0] - faceCenterPos[0]) * 1.3 //오른쪽 볼 넓이
//         }
//         console.log(leftFaceWidth);
//         // // faceCenterPos[0] = faceCenterPos[0] + (o1 * (faceWidth / 4))
//         // if (leftFaceWidth > faceWidth * 0.4 || Math.abs(leftFaceWidth) <= faceWidth * 0.4) { //완전 옆면을 보일 시에 볼의 좌표가 코를 넘어가기 때문에 길이를 고정해준다.
//         //     leftFaceWidth = faceWidth * -0.3
//         //     rightFaceWidth *= 1.2
//         //     if(this.shortWidth) faceCenterPos[0] += leftFaceWidth/3
//         // } else if (leftFaceWidth > faceWidth * 0.5 || Math.abs(leftFaceWidth) <= faceWidth * 0.5) {
//         //     leftFaceWidth = faceWidth * -0.45
//         //     rightFaceWidth *= 1.1
//         // }

//         // if (rightFaceWidth <= faceWidth * 0.4) {  //완전 옆면을 보일 시에 볼의 좌표가 코를 넘어가기 때문에 길이를 고정해준다.
//         //     rightFaceWidth = faceWidth * 0.3
//         //     leftFaceWidth *= 1.2
//         //     if(this.shortWidth) faceCenterPos[0] += rightFaceWidth/3
//         // } else if (rightFaceWidth <= faceWidth * 0.5) {
//         //     rightFaceWidth = faceWidth * 0.45
//         //     leftFaceWidth *= 1.1
//         // }

//         //마스크 드로잉
//         await this.ctx.save();
//         await this.ctx.translate(faceCenterPos[0], faceCenterPos[1]) //기준점 잡기. 드로우가 시작되는 좌표를 기준점으로 잡아야 그려지는 부분만 회전이 가능
//         await this.ctx.rotate(o1)
//         await this.ctx.translate(-faceCenterPos[0], -faceCenterPos[1]) //이후에 이미지를 원하는 위치에 그리기 위해 다시 초기화해줌
//         // ctx.scale(-1,1)
//         await this.ctx.drawImage(this.leftMask, faceCenterPos[0] + 1 , faceCenterPos[1], leftFaceWidth , noseToBottom )
//         await this.ctx.drawImage(this.rightMask, faceCenterPos[0] , faceCenterPos[1], rightFaceWidth , noseToBottom )
//         await this.ctx.restore()
//     }
// }
