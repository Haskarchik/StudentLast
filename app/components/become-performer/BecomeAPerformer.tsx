// components/BecomeAPerformer.tsx

"use client";

import React, { FC, } from "react";
import "./HowTo.scss";
import InfoBlock from "../about-us/InfoBlock";
import { chekVisible } from "../visible-cheker/isVisible";

interface PerformerProps {
  Performer: {
    how_become: string;
    executor: string;
    fill_form: string;
    review_application: string;
    waiting_feedback: string;
    you_team: string;
  };
}

const BecomeAPerformer: FC<PerformerProps> = ({ Performer }) => {
  return (
    <div className="wrapper-how-to">
      <div className="how-to-item">
        <span className="span-sub-article span-title">
          {Performer.how_become}{" "}
          <span className="span-br">{Performer.executor}</span>
        </span>
        <div className="info-block-items-wrapper">
          <div className="info-block-items">
            <InfoBlock
              id={Performer.fill_form}
              numberInfo="01"
              text={Performer.fill_form}
              isVisible={chekVisible(".how-to-item")}
            />
            <InfoBlock
              id={Performer.review_application}
              numberInfo="02"
              text={Performer.review_application}
              isVisible={chekVisible(".how-to-item")}
            />
            <InfoBlock
              id={Performer.waiting_feedback}
              numberInfo="03"
              text={Performer.waiting_feedback}
              isVisible={chekVisible(".how-to-item")}
            />
            <InfoBlock
              id={Performer.you_team}
              numberInfo="04"
              text={Performer.you_team}
              isVisible={chekVisible(".how-to-item")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomeAPerformer;
