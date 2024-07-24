import React, { FC } from 'react';
import './ReviewsCardItem.scss';
import Image from 'next/image';

type Props = {
  id: number;
  images: string;
  text: string;
  userName: string;
  stars: number;
};
const ReviewsCardItem: FC<Props> = ({ images, text, id, userName }) => {
  const stars = Array.from({ length: 5 }, (_, index) => <Image src="/review-photos/star.svg" width={20} height={20} alt='star'/>);
  return (
    <div key={id} className="cardItem-wrapper">
      <Image className="cardItem-photo" width={100} height={100} src={images} alt="cardItem-photo" />
      <span className="cardItem-name">{userName}</span>
      <span className="cardItem-review">{text}</span>
      <div className="cardItem-stars">{stars}</div>
    </div>
  );
};

export default ReviewsCardItem;
