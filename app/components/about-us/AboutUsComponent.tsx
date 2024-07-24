import React, { FC, useEffect } from "react";
import "./AboutUsComponent.scss";
import InfoBlock from "./InfoBlock";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

type Props = {
  article: string;
  lang:Locale
};
const AboutUsComponent: FC<Props> =async ({ article,lang }) => {
  const {AboutUs}=await getDictionary(lang)
  return (
    <div className="about-wrapper">
      <div className="about-item">
        <span className="span-sub-article span-title">{article}</span>

        <div className="text-item">
          <div className="text-item-description">{AboutUs.description_2}{" "}{AboutUs.description_1}</div>
          
          <span className="span-br"></span>
          <div className="info-block-item">
            <InfoBlock numberInfo="5" text={AboutUs.years_in_industry} />
            <InfoBlock numberInfo="3000+" text={AboutUs.completed_works} />
            <InfoBlock
              numberInfo="1000+"
              text={AboutUs.regular_customers}
            />
            <InfoBlock fake />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsComponent;
