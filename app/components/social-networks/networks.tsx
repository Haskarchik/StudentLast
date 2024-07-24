import Image from 'next/image';
export const socialNetworks = [
  {
    image: <Image src={"/review-photos/instagram-logo.png"} width={100} height={100} alt='instagram' className="social-network-icon" />,
    path: 'https://www.instagram.com/student_helper_official'
  },
  {
    image: <Image src={"/review-photos/telegram-icon.png"} width={100} height={100} alt='telegram' className="social-network-icon social-network-icon-telegram" />,
    path: 'https://t.me/student_helper_official'
  },
  {
    image: <Image src={"/review-photos/tiktok-icon.svg"} width={100} height={100} alt='tik tok' className="social-network-icon social-network-icon-tiktok" />,
    path: 'https://www.tiktok.com/@student_helper_official?_t=8fNJV8RjsF4'
  }
];
