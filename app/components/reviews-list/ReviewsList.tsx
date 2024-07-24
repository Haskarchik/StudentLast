import { Locale } from '@/i18n.config';
import { Review } from '../reviews/Review';
import { ReviewCard } from './ReviewsCard';
import './ReviewsList.scss';

interface ReviewsListProps {
  showReviews: Array<Review>;
  reviews:any;
  lang:Locale;
  subjects:any;
}
export default function ReviewsList({ showReviews, reviews,lang,subjects }: ReviewsListProps) {
  return (
    <div className="reviews-list">
      {showReviews.map((review) => (
        <ReviewCard subjects={subjects} lang={lang} key={review.id} review={review} reviews={reviews} />
      ))}
    </div>
  );
}
