export default function getDeviceType(): boolean[] {
  const ua = navigator.userAgent;
  let shortHeight = false;
  let shortWidth = false;
  let isPC = false;
  if (/iphone/i.test(ua)) {
    let floatOs = 0;
    let osInfo;
    let realOs;
    if (/fbsv/i.test(ua)) {
      osInfo = ua.split('FBSV')[1];
      realOs = osInfo.substring(1, 3) + '.' + osInfo.substring(4, 5);
      floatOs = parseFloat(realOs);
    } else {
      osInfo = ua.split('OS')[1];
      realOs = osInfo.substring(1, 3) + '.' + osInfo.substring(4, 5);

      //ios버전 추출해서 실수형으로.
      floatOs = parseFloat(realOs);
    }
    if (floatOs < 13.4) shortHeight = true;
    else shortWidth = true;
  }
  if (/ipad/i.test(ua)) shortHeight = true;

  if (!/mobile/i.test(ua)) isPC = true;

  return [shortHeight, shortWidth, isPC];
}
