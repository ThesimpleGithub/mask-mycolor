import '@tensorflow/tfjs-backend-webgl';
import * as faceLandmarksDetection from '@tensorflow-models/face-landmarks-detection';
import { drawFaceLine } from './drawFaceLine';
import drawMask from './drawMask';

const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const video = document.getElementById('video') as HTMLVideoElement;
const loading = document.getElementById('ML_Loading')!;

export class animation {
  constructor(
    private drawClass: drawFaceLine | drawMask,
    private beforeStart: VoidFunction,
    private afterStart: VoidFunction,
  ) {
    faceLandmarksDetection
      .load(faceLandmarksDetection.SupportedPackages.mediapipeFacemesh, {
        maxFaces: 1,
      })
      .then(model => this.animate(model));
  }

  animate = async (model: faceLandmarksDetection.FaceLandmarksPackage) => {
    const predictions = await model.estimateFaces({
      input: video!,
      returnTensors: false,
      flipHorizontal: false,
      predictIrises: false,
    });
    if (predictions.length > 0) this.draw(predictions[0].scaledMesh);

    const srcObj: any = video.srcObject;
    if (srcObj.active) requestAnimationFrame(() => this.animate(model));
  };

  draw(positions: number[][]) {
    if (this.drawClass instanceof drawFaceLine)
      (this.drawClass as drawFaceLine).draw(positions);
    // else if (this.drawClass instanceof drawFaceBG)
    //   (this.drawClass as drawFaceBG).draw(positions);
    // else if (this.drawClass instanceof drawMask)
    //   (this.drawClass as drawMask).draw(positions);
    // else (this.drawClass as drawLip).draw(positions);
  }
}
