import React from "react";
import "./JoinOurTeam.scss";
import WhiteButton from "../button/WhiteButton";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import Link from "next/link";


const JoinOurTeam = async({lang}:{lang:Locale}) => {
  const {AboutUs}=await getDictionary(lang);
  return (
    <div className="join-wrapper">
      <span className="span-sub-article span-title">
        {AboutUs.join_to_teem}
      </span>
      <div className="join-items">
        <span className="join-item-span">
          <p>{AboutUs.join_to_teem_description}</p>
        </span>
        <div className={"button-wrapper"}>
          <Link href={`/${lang}/performer`}>
            <WhiteButton text={AboutUs.become_performer} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JoinOurTeam;
