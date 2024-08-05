import React from "react";
import "./ReviewsCard.scss";
import { photos } from "../ReviewsPhoto";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import ReviewsCardClient from "./ReviewsCardClient";

interface ReviewsCardProps {
  type: string;
  lang: Locale;
}
const ReviewsCard = async ({ type, lang }: ReviewsCardProps) => {
  const { reviews, AboutUs } = await getDictionary(lang);
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
    <>
      <ReviewsCardClient AboutUs={AboutUs} reviewsData={reviewsData} lang={lang} />
    </>
  );
};

export default ReviewsCard;
