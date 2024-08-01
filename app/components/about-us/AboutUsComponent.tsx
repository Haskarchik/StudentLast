// components/AboutUsComponent.tsx

"use client";

import React, { FC  } from "react";
import "./AboutUsComponent.scss";
import InfoBlock from "./InfoBlock";
import { chekVisible } from "../visible-cheker/isVisible";

type Props = {
  article: string;
  AboutUs: {
    description_1: string;
    years_in_industry: string;
    completed_works: string;
    regular_customers: string;
  };
};

const AboutUsComponent: FC<Props> = ({ article, AboutUs }) => {
 

  return (
    <div className="about-wrapper">
      <div className="about-item">
        <span className="span-sub-article span-title">{article}</span>
        <div className="text-item">
          <div className="text-item-description">{AboutUs.description_1}</div>
          <span className="span-br"></span>
          <div className="info-block-item">
            <InfoBlock
              id="info1"
              numberInfo="5"
              text={AboutUs.years_in_industry}
              isVisible={chekVisible('.info-block-item')}
            />
            <InfoBlock
              id="info2"
              numberInfo="3000+"
              text={AboutUs.completed_works}
              isVisible={chekVisible('.info-block-item')}
            />
            <InfoBlock
              id="info3"
              numberInfo="1000+"
              text={AboutUs.regular_customers}
              isVisible={chekVisible('.info-block-item')}
            />
            <InfoBlock id="info4" fake isVisible={chekVisible('.info-block-item')} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsComponent;
