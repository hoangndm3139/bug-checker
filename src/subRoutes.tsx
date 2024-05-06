import Image from 'next/image';

const subRoutes = [
  {
    name: 'Feedback',
    path: 'feedback',
    icon: <Image
      src="/svg/ic_img.svg"
      width={25}
      height={25}
      alt="ic_img"
    />,
  },

];
export default subRoutes;
