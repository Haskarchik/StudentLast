// components/ReviewsCard.tsx

"use client";

import React, { FC, useEffect, useState } from "react";
import "./ReviewsCard.scss";
import ReviewsCardItem from "./ReviewsCardItem";
import WhiteNavigateButton from "../white-navigate-button/WhiteNavigateButton";
import { chekVisible } from "../visible-cheker/isVisible";
import { Locale } from "@/i18n.config";

interface ReviewsCardProps {
  AboutUs: {
    our_reviews: string;
    customers: string;
    all_comment: string;
  };
  lang:Locale
  reviewsData: Array<{
    id: number;
    photo: string;
    userName: string;
    text: string;
    typeOfWork: string;
    date: number;
  }>;
}

const ReviewsCardClient: FC<ReviewsCardProps> = ({ AboutUs, reviewsData ,lang}) => {


 
  return (
    <div className="reviewsCard-wrapper">
      <span className="span-sub-article span-title">
        {AboutUs.our_reviews} <br />
        {AboutUs.customers}
      </span>
      <div className="reviewsCard-right">
        <div
          className="map-wrapper"
          style={chekVisible('.cardItem-wrapper') ? { animationPlayState: "running" } : {}}
        >
          {reviewsData.map((reviewer) => (
            <ReviewsCardItem
              key={reviewer.id}
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

export default ReviewsCardClient;
