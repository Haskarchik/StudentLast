import React from "react";
import "./HowTo.scss";
import InfoBlock from "../about-us/InfoBlock";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

const BecomeAPerformer = async({lang}:{lang:Locale}) => {
  const {Performer}=await getDictionary(lang);
  return (
    <div className="wrapper-how-to">
      <div className="how-to-item">
        <span className="span-sub-article span-title">
          {Performer.how_become}{" "}
          <span className="span-br">{Performer.executor}</span>
        </span>
        <div className="info-block-items-wrapper">
          <div className="info-block-items">
            <InfoBlock numberInfo="01" text={Performer.fill_form} />
            <InfoBlock
              numberInfo="02"
              text={Performer.review_application}
            />
            <InfoBlock numberInfo="03" text={Performer.waiting_feedback} />
            <InfoBlock numberInfo="04" text={Performer.you_team} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomeAPerformer;
