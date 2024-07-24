import React, { FC } from "react";
import "./OffersItem.scss";
import { getDictionary } from "@/lib/dictionary";
import Link from "next/link";
import { Locale } from "@/i18n.config";
import Image from "next/image";
//import { ReactComponent as Arrow } from "../../assets/arrow-button.svg";
//import { ReactComponent as ClockIcon } from "../../assets/clock.svg";

type Props = {
  id: number;
  price: number;
  time: string;
  workName: string;
  lang:Locale
  OffersData:any
};

const OffersItem: FC<Props> = ({ id, price, time, workName, lang, OffersData }) => {
  return (
    <div className="offers-wrapper" key={id}>
      <Link
        href={`/${lang}/worktype/${id}`}
        className="offers-items">
        <div className="name-price">
          <div className="work-name-div">
            <div className="work-link">
              <span className="work-span">{workName}</span>
            </div>
          </div>
          <div className="price-div">
            <span>{`${OffersData.from} ${
              lang === "ua" ? price : Math.floor(price / 30)
            }${OffersData.currency}`}</span>
            <span className="time-span">
              <Image src="/review-photos/clock.svg" alt="clock" width={30} height={30}/>
              &nbsp;
              {time}
            </span>
          </div>
        </div>
        <div className="time-arrow">
          <div className={"arrow-icon"} />
        </div>
      </Link>
    </div>
  );
};

export default OffersItem;
