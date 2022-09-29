export default class drawParent {
  protected canvas: HTMLCanvasElement;
  protected video: HTMLVideoElement;
  protected ctx: CanvasRenderingContext2D;
  constructor() {
    this.canvas = document.getElementById('canvas') as HTMLCanvasElement;
    this.video = document.getElementById('video') as HTMLVideoElement;
    this.canvas.width = this.video.videoWidth;
    this.canvas.height = this.video.videoHeight;
    this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  draw(positions: number[][], ...args: any[]): void {}

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.drawImage(this.video, 0, 0, this.canvas.width, this.canvas.height);
  }
}
