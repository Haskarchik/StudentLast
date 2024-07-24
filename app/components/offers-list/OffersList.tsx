import React, { ChangeEvent, useEffect, useState } from "react";
import "./OffersList.scss";
import OffersItem from "../offers-item/OffersItem";
import { Offer } from "./OfferData";
import { Locale } from "@/i18n.config";
import Pagination from "../pagination/Pagination";

interface OffersListProps {
  data: Offer[];
  lang:Locale,
  OffersData:any
}

const OffersList: React.FC<OffersListProps> = ({
  data,
  lang,
  OffersData
}) => {
  return (
    <div className="wrapper-offers">
      <ul>
        {data.map((item) => (
          <OffersItem
            OffersData={OffersData}
            lang={lang}
            key={item.id}
            id={item.id}
            price={item.price}
            time={item.time}
            workName={item.workName}
          />
        ))}
      </ul>
    </div>
  );
};

export default OffersList;
