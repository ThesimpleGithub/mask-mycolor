import type { AppProps } from 'next/app';
import axios from 'axios';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../utils/global';
import theme from '../utils/theme';
import Head from 'next/head';
import structuredData from '../datas/structuredData';
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  axios.defaults.baseURL = 'https://server.mycolor.kr:7001';

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any) {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());

    gtag('config', 'G-8VCJLDNLZT');
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/favicon/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/favicon/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/favicon/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/favicon/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="/favicon/ms-icon-144x144.png"
        />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>가상 마스크 피팅 - 마이퍼스널컬러</title>
        <meta name="twitter:card" content="summary" />

        <meta
          name="twitter:title"
          content="인공지능 퍼스널컬러 자가진단 마스크 추천 및 AR 가상필터"
        />

        <meta
          name="twitter:description"
          content="인공지능이 퍼스널컬러를 측정하고 어울리는 마스크를 추천해줍니다. AR 가상필터를 통해 마스크를 착용해보고 저렴한 가격에 구매해보세요!"
        />
        <meta
          name="twitter:image"
          content="https://mask.mycolor.kr/images/thumbnail.png"
        />

        <meta name="twitter:site" content="https://mycolor.kr" />
        <meta
          property="og:image"
          content="https://mask.mycolor.kr/images/thumbnail.png"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="인공지능 퍼스널컬러 자가진단 마스크 추천 및 AR 가상필터 - 마이퍼스널컬러"
        />
        <meta
          property="og:description"
          content="인공지능이 퍼스널컬러를 측정하고 어울리는 마스크를 추천해줍니다. AR 가상필터를 통해 마스크를 착용해보고 저렴한 가격에 구매해보세요!"
        />
        <meta
          property="og:site_name"
          content="인공지능 퍼스널컬러 자가진단 마스크 추천 및 AR 가상필터 - 마이퍼스널컬러"
        />
        <link rel="canonical" href="https://mask.mycolor.kr" />
        <meta
          name="description"
          content="인공지능이 퍼스널컬러를 측정하고 어울리는 마스크를 추천해줍니다. AR 가상필터를 통해 마스크를 착용해보고 저렴한 가격에 구매해보세요!"
        />
        <meta
          name="google-site-verification"
          content="P-8U2HfbhMwx633bYgc3Qkn6FWQG7o3BB7xc2YvPLNc"
        />
        <meta
          name="naver-site-verification"
          content="6e7e77d0601c05cb52668a6543039e71c197f385"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-M1SBCM0HCC"
        ></script>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <GlobalStyle />
      <div id="modal-root"></div>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
