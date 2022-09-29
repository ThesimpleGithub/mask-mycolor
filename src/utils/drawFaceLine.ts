import axios from 'axios';
import drawParent from './drawParent';
import canvasToImg from './canvasToImg';
import { Dispatch, SetStateAction } from 'react';
export class drawFaceLine extends drawParent {
  PI: number = Math.PI * 2;
  dotPos!: number[];
  radius: number;
  isDetected = false;
  drawLineIdx = 0;
  progressBar: HTMLElement;
  percent: HTMLElement;
  progressContainer: HTMLElement;
  isCompleted = false;
  progressCnt: number;
  constructor(
    private setScanEnd: Dispatch<SetStateAction<boolean>>,
    private setExplain: Dispatch<SetStateAction<string>>,
    private setLoading: Dispatch<SetStateAction<boolean>>,
    private setIsCalculating: Dispatch<SetStateAction<boolean>>,
  ) {
    super();
    this.progressBar = document.getElementById('progressBar') as HTMLElement;
    this.percent = document.getElementById('progressPercent') as HTMLElement;
    this.progressContainer = document.getElementById(
      'progressContainer',
    ) as HTMLElement;
    this.ctx.fillStyle = '#FFFFFF';
    this.radius = 2;
    this.progressCnt = 0;
    this.dotPos = [
      132, 58, 172, 93, 127, 234, 288, 361, 323, 454, 356, 359, 467, 260, 259,
      379, 365, 397, 28, 27, 29, 136, 150, 149, 176, 148, 152, 414, 190, 56,
      257, 258, 286, 195, 5, 4, 30, 247, 197, 85, 180, 90, 320, 404, 315, 76,
      74, 73, 303, 304, 306, 400, 377, 378, 1, 72, 302,
    ];
  }

  progress() {
    const add = Math.random() * 3;
    this.progressCnt = Number((this.progressCnt + add).toFixed(2));
    if (this.progressCnt > 100) this.progressCnt = 100;
    this.progressContainer.style.display = 'inline-flex';
    this.progressBar.style.width = this.progressCnt + '%';
    this.percent.innerText = this.progressCnt + '%';
  }

  draw(positions: number[][]): void {
    this.setExplain('퍼스널컬러를 측정 중입니다.');
    this.ctx!.strokeStyle = 'rgba(255,255,255,.5)';
    this.ctx!.lineWidth = 3;
    const loading = document.getElementById('ML_Loading');
    this.drawLineIdx = 1;
    this.progressCnt += 1;
    if (this.progressCnt <= 20) {
      this.dotPos.forEach((i, _idx) => {
        //x축 y축 모두 얼굴위치와 같다면 count업 전부 카운트가 올라가면 얼굴과 딱 맞게 된 것
        this.ctx?.beginPath();
        this.ctx?.arc(
          positions[i][0],
          positions[i][1],
          this.radius,
          this.PI,
          0,
          false,
        );
        this.ctx?.closePath();
        this.ctx?.fill();

        this.ctx.stroke();
      });
    } else if (!this.isCompleted) {
      this.isCompleted = true;
      const form = new FormData();
      form.append('file', canvasToImg(false));
      this.setLoading(true);
      this.setIsCalculating(true);
      axios.post('/remove/sendImg', form).then(res => {
        this.setLoading(false);
        this.setScanEnd(true);
        this.setIsCalculating(false);
      });
    }
  }

  // drawPath(
  //   ctx: CanvasRenderingContext2D,
  //   points: number[][],
  //   closePath: boolean,
  // ) {
  //   const region = new Path2D();
  //   region.moveTo(points[0][0], points[0][1]);
  //   for (let i = 1; i < points.length; i++) {
  //     const point = points[i];
  //     region.lineTo(point[0], point[1]);
  //   }

  //   if (closePath) {
  //     region.closePath();
  //   }
  //   ctx.stroke(region);
  // }
}
