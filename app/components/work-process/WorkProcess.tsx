import React from "react";
import "./WorkProcess.scss";
import process from "../../assets/full-process.png";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

const WorkProcess = async({lang}:{lang:Locale}) => {
  const {AboutUs}=await getDictionary(lang) 
  return (
    <div className="work-process-wrapper">
      <span className="span-sub-article span-title">
        {AboutUs.order_fulfillment_process}
      </span>
      <div className="work-process-container">
       
        <div className="work-process-left-part">
          <div className="work-process-step first-step">{AboutUs.fill_form}</div>
          <div className="work-process-step second-step">
          {AboutUs.completed_works_by_creator1}
          <br />
          {AboutUs.completed_works_by_creator2}

       
          </div>
        </div>
        <div className="work-process-right-part">
        <div className="work-process-step third-step"> {AboutUs.details_via_Telegram}
       </div>
          <div className="work-process-step four-step">
          {AboutUs.finished_job}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;
