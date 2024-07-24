import Image from 'next/image';
import { Review } from '../reviews/Review';
import './ReviewCard.scss';
import { Locale } from '@/i18n.config';
import Link from 'next/link';
//import { ReactComponent as Star } from '../../assets/star.svg';

interface ReviewsCardProps {
  review: Review;
  reviews:any;
  lang:Locale;
  subjects:any;
}

export function ReviewCard({ review, reviews, lang, subjects }: ReviewsCardProps) {
  const stars = Array.from({ length: review.stars ? review.stars : 5 }, (_, index) => (
    <Image src="/review-photos/star.svg" width={20} height={20} alt='star' key={index} />
  ));
  const dateTime = new Date(review.date * 1000);

  const zeroBefore = (value: number) => (value < 10 ? '0' : '');

  const dateStr =
    `${zeroBefore(dateTime.getDay())}${dateTime.getDay()}.` +
    `${zeroBefore(dateTime.getMonth())}${dateTime.getMonth()}.` +
    `${dateTime.getFullYear()} | ` +
    `${zeroBefore(dateTime.getHours())}${dateTime.getHours()}:` +
    `${zeroBefore(dateTime.getMinutes())}${dateTime.getMinutes()}`;
  function findKeyByValue(value:string) {
    for (const key in subjects) {
      if (subjects[key]===value) {
        return key;
      }
    }
    return null;
  }

  return (
    <div className="review-wrapper">
      <div>
        <Image width={100} height={100} src={review.photo} className="review-image" alt={'Фото відгуку'} />
      </div>
      <div>
        <div className="review-username">{review.userName}</div>
        <div className="review-text">{review.text}</div>
        <div className="review-type-of-work">
         <b>{reviews.type_of_work}</b> <Link href={`/${lang}/reviews/${findKeyByValue(review.typeOfWork)?.toLocaleLowerCase()}/1`}> {review.typeOfWork}</Link>
        </div>
        <div className="review-date">{dateStr}</div>
        <div className="review-stars">{stars}</div>
      </div>
    </div>
  );
}
