// components/HowToOrder.tsx

"use client";

import React, { FC,} from "react";
import "@/app/[lang]/worktype/WorkType.scss";
import "./HowTo.scss";
import InfoBlock from "../about-us/InfoBlock";
import { chekVisible } from "../visible-cheker/isVisible";

interface PerformerProps {
  Performer: {
    how_order: string;
    job: string;
    fill_form: string;
    feedback_performer: string;
    get_job: string;
    work_check: string;
  };
}

const HowToOrder: FC<PerformerProps> = ({ Performer }) => {
  return (
    <div className="wrapper-how-to">
      <div className="how-to-item">
        <span className="span-sub-article span-title">
          {Performer.how_order}
          <span className="span-br">{Performer.job}</span>
        </span>
        <div className="info-block-items-wrapper">
          <div className="info-block-items">
            <InfoBlock
              id="Performer.fill_form"
              numberInfo="01"
              text={Performer.fill_form}
              isVisible={chekVisible(".how-to-item")}
            />
            <InfoBlock
              id="Performer.feedback_performer"
              numberInfo="02"
              text={Performer.feedback_performer}
              isVisible={chekVisible(".how-to-item")}
            />
            <InfoBlock
              id="Performer.get_job"
              numberInfo="03"
              text={Performer.get_job}
              isVisible={chekVisible(".how-to-item")}
            />
            <InfoBlock
              id="Performer.work_check"
              numberInfo="04"
              text={Performer.work_check}
              isVisible={chekVisible(".how-to-item")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToOrder;
