/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV == 'development';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: isDev
    ? ''
    : 'https://cdn.jsdelivr.net/gh/thesimplegithub/mycolor-mask',
  env: {
    PATH: isDev
      ? ''
      : 'https://cdn.jsdelivr.net/gh/thesimplegithub/mycolor-mask',
    // PATH: isDev ? "" : "/mycolor-nextJS",
    URL: isDev ? '' : 'https://mask.mycolor.kr',
    isDev: isDev ? true : false,
    REACT_APP_SC_DISABLE_SPEEDY: true,
  },
};

module.exports = nextConfig;
