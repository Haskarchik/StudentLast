import React from "react";
import "./ReviewsCard.scss";
//import { reviewsData } from '../ReviewsData';
import { photos } from "../ReviewsPhoto";
import ReviewsCardItem from "./ReviewsCardItem";
import WhiteNavigateButton from "../white-navigate-button/WhiteNavigateButton";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

interface ReviewsCardProps {
  type: string;
  lang:Locale;
}
const ReviewsCard =async ({ type,lang }: ReviewsCardProps) => {
  const {reviews,AboutUs}=await getDictionary(lang);
  const reviewsData = [
    {
      id: 1,
      photo: photos.photoProf1,
      userName: reviews.alina_username,
      text: reviews.alina_review,
      typeOfWork: reviews.course_work,
      date: 1676714052,
    },
    {
      id: 2,
      photo: photos.photoProf2,
      userName: reviews.markiyan_username,
      text: reviews.markiyan_review,
      typeOfWork: reviews.course_work,
      date: 1634548501,
    },
    {
      id: 3,
      photo: photos.photoProf3,
      userName: reviews.misha_username,
      text: reviews.misha_review,
      typeOfWork: reviews.course_work,
      date: 1659355873,
    },
    {
      id: 4,
      userName: reviews.anna_username,
      photo: photos.photoProf4,
      text: reviews.anna_review,
      typeOfWork: reviews.course_work,
      date: 1678381499,
    },
  ];

  return (
    <div className="reviewsCard-wrapper">
      <span className="span-sub-article span-title">
        {AboutUs.our_reviews} <br />
        {AboutUs.customers}
      </span>
      <div className="reviewsCard-right">
        <div className="map-wrapper">
          {reviewsData.map((reviewer, index) => (
            <ReviewsCardItem
              key={index + reviewer.id}
              id={reviewer.id}
              userName={reviewer.userName}
              images={reviewer.photo}
              text={reviewer.text}
              stars={5}
            />
          ))}
        </div>
        <div className="button-wrapper">
          <WhiteNavigateButton
            content={AboutUs.all_comment}
            to={`/${lang}/reviews/all/1`}
          />
        </div>
      </div>
    </div>
  );
};

export default ReviewsCard;
