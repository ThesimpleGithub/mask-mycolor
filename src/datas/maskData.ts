type maskObjType = {
  [key in string]: maskType[];
};

export interface maskType {
  src: string;
  href: string;
  left: string;
  right: string;
}
export const maskObj: maskObjType = {
  새부리형: [
    {
      src: 'blackMask.png',
      left: 'black-left.png',
      right: 'black-right.png',
      href: '',
    },
    {
      src: 'mintMask.png',
      left: 'mint-left.png',
      right: 'mint-right.png',
      href: '',
    },
    {
      src: 'whiteMask.png',
      left: 'white-left.png',
      right: 'white-right.png',
      href: '',
    },
    {
      src: 'pinkMask.png',
      left: 'pink-left.png',
      right: 'pink-right.png',
      href: '',
    },
    {
      src: 'pinkMask.png',
      left: 'pink-left.png',
      right: 'pink-right.png',
      href: '',
    },
    {
      src: 'pinkMask.png',
      left: 'pink-left.png',
      right: 'pink-right.png',
      href: '',
    },
  ],
  일반형: [
    {
      src: 'whiteMask.png',
      left: 'white-left.png',
      right: 'white-right.png',
      href: '',
    },
    {
      src: 'whiteMask.png',
      left: 'black-left.png',
      right: 'black-right.png',
      href: '',
    },
    {
      src: 'whiteMask.png',
      left: 'black-left.png',
      right: 'black-right.png',
      href: '',
    },
    {
      src: 'whiteMask.png',
      left: 'black-left.png',
      right: 'black-right.png',
      href: '',
    },
  ],
  '퍼스널컬러-여름뮤트': [
    {
      src: 'mintMask.png',
      left: 'mint-left.png',
      right: 'mint-right.png',
      href: '',
    },
    {
      src: 'mintMask.png',
      left: 'black-left.png',
      right: 'black-right.png',
      href: '',
    },
    {
      src: 'mintMask.png',
      left: 'black-left.png',
      right: 'black-right.png',
      href: '',
    },
    {
      src: 'mintMask.png',
      left: 'black-left.png',
      right: 'black-right.png',
      href: '',
    },
  ],
};
