import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
/* @font-face { 
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 100;
  src: local('Noto Sans'),
  url("https://jaehoon-bucket.s3.ap-northeast-2.amazonaws.com/NotoSansCJKkr-DemiLight.woff") format('woff')
}
@font-face {
  font-family: 'HSThin';
  font-style: normal;
  font-weight: 100;
  src: local('HSThin'),
  url(https://cdn.jsdelivr.net/gh/hoonsbory/mycolor-deploy/font/HSThin.woff2) format('woff2'),
  url(https://cdn.jsdelivr.net/gh/hoonsbory/mycolor-deploy/font/HSThin.woff) format('woff'),
  url(https://cdn.jsdelivr.net/gh/hoonsbory/mycolor-deploy/font/HSThin.ttf) format('truetype'),
  url(https://cdn.jsdelivr.net/gh/hoonsbory/mycolor-deploy/font/HSThin.otf) format('opentype')
  파이썬의 pyftsubset을 통해 경량화함 
} */
@font-face { 
  font-family: 'Dongle';
  src : url("./fonts/Dongle-Regular-subset.woff");
}
@font-face {
	font-family: 'Pretendard Variable';
	font-weight: 45 920;
	font-style: normal;
	font-display: swap;
	src: local('Pretendard Variable'), url('./fonts/PretendardVariable-subset.woff2') format('woff2-variations');
}
.slick-arrow{
  display : none !important;
}
button{
  cursor: pointer;
}
body {
  margin: 0;
  padding : 0;
  font-weight: 500;
  padding-right : 0px !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Pretendard Variable';
  overflow-x : hidden;
}
html{
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
  overflow : auto; 
}
html,body{
  text-size-adjust : none;
  -webkit-text-size-adjust: none;
	-moz-text-size-adjust: none;
	-ms-text-size-adjust: none;
  -o-text-size-adjust: none;
}
  .lazy {
    visibility: hidden;
  }
  .afterLoad{
    visibility : visible !important;
  }
  p{
    margin : 0;
  }
  *{
    box-sizing: border-box;
    font-family: 'Pretendard Variable';
    outline : 0;
    border : 0;
    min-height: 0;
    min-width: 0;
  }
  /* #video, .faceCanvas, #colorCanvas{
    width : 100vw  !important;
    height : 100vh !important;
    position: fixed;
    left : 0;
    top : 0;
    transition: 0.125s linear;
    z-index: 999;
    @media (max-width: 720px) {
      width : 720px;
    }
  } */
    /* @media(max-height : 768px){
      height : 130% !important;
    }*/
    /* @media (min-width: 1025px) {
      height: 800px;
    }
    @media (min-width: 610px) and (max-width: 1024px) {
      height: 750px;
    }
    @media (max-width: 610px) {
      height: 480px;
    }
    @media(max-height : 568px){
      max-height : 60vh !important;
    }  */
  .slick-prev{
    left : 0;
    z-index : 999;
  }
  .slick-next{
    right : 0;
  }
  .slick-prev:before, .slick-next:before{
    color : black;
  }
`;

export default GlobalStyle;
