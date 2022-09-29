const canvasToImg = (canvas: any): Blob => {
  if (!canvas) {
    const video = document.getElementById('video') as HTMLVideoElement;
    canvas = document.createElement('canvas') as HTMLCanvasElement;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx: CanvasRenderingContext2D = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
  }
  const imgData = canvas.toDataURL('image/png'); //캔버스 화면을 이미지 파일(blob)로 변경

  const blobBin = atob(imgData.split(',')[1]);
  const arr: any = [];
  [...blobBin].forEach((_i, idx) => arr.push(blobBin.charCodeAt(idx)));
  const file = new Blob([new Uint8Array(arr)], { type: 'image/png' });
  console.log(file);
  return file;
};

export default canvasToImg;
