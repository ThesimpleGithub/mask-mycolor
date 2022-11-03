const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: '',
  step: [
    {
      '@type': 'HowToStep',
      url: 'https://mask.mycolor.kr',
      image: {
        '@type': 'ImageObject',
        url: 'https://mask.mycolor.kr/images/thumbnail.png',
        width: '700',
        height: '500',
      },
      text: '카메라를 이용하여 퍼스널컬러를 측정한다.',
    },
    {
      '@type': 'HowToStep',
      url: 'https://mask.mycolor.kr',
      image: {
        '@type': 'ImageObject',
        url: 'https://example.com/photos/howto-step2.jpg',
        width: '700',
        height: '500',
      },
      text: '퍼스널컬러에 맞는 마스크를 추천받는다.',
    },
    {
      '@type': 'HowToStep',
      url: 'https://mask.mycolor.kr',
      image: {
        '@type': 'ImageObject',
        url: 'https://example.com/photos/howto-step3.jpg',
        width: '700',
        height: '500',
      },
      text: '가상 마스크를 착용해보고 마음에 맞는 마스크를 구매한다.',
    },
  ],
};

export default structuredData;
