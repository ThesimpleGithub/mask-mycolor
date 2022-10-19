export default class drawParent {
  protected canvas!: HTMLCanvasElement;
  protected video!: HTMLVideoElement;
  protected ctx!: CanvasRenderingContext2D;
  constructor() {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  draw(positions: number[][], ...args: any[]): void {}

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.drawImage(this.video, 0, 0, this.canvas.width, this.canvas.height);
  }
  init(
    canvas: HTMLCanvasElement,
    video: HTMLVideoElement,
    slider: HTMLDivElement,
  ) {
    this.canvas = canvas;
    this.video = video;
    this.canvas.width = this.video.videoWidth;
    this.canvas.height = this.video.videoHeight;
    // this.canvas.style.width = this.video.videoWidth + 'px';
    this.canvas.style.height = innerHeight - slider.clientHeight + 3 + 'px';
    this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
    this.ctx.fillStyle = '#FFFFFF';
  }
}
