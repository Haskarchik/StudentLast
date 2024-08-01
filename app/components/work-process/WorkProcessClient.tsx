// components/WorkProcess.tsx

"use client";

import React, { FC, useEffect } from "react";
import "./WorkProcess.scss";
import { chekVisible } from "../visible-cheker/isVisible";

type Props = {
  AboutUs: {
    order_fulfillment_process: string;
    fill_form: string;
    completed_works_by_creator1: string;
    completed_works_by_creator2: string;
    details_via_Telegram: string;
    finished_job: string;
  };
  lang: any;
  left: boolean;
};

const WorkProcess: FC<Props> = ({ AboutUs, lang, left = false }) => {
  return (
    <div className="work-process-wrapper">
      <span className="span-sub-article span-title">
        {AboutUs.order_fulfillment_process}
      </span>
      <div
        className="work-process-container"
        style={
          left
            ? {
                alignSelf: "flex-end",
              }
            : {}
        }
      >
        <div className="work-process-left-part">
          <div
            className="work-process-step first-step"
            style={
              chekVisible(".work-process-wrapper")
                ? {
                    animationPlayState: "running",
                  }
                : {}
            }
          >
            {AboutUs.fill_form}
          </div>
          <div
            className="work-process-step second-step"
            style={
              chekVisible(".work-process-wrapper")
                ? {
                    animationPlayState: "running",
                  }
                : {}
            }
          >
            {AboutUs.completed_works_by_creator1}
            <br />
            {AboutUs.completed_works_by_creator2}
          </div>
        </div>
        <div className="work-process-right-part">
          <div
            className="work-process-step third-step"
            style={
              chekVisible(".work-process-wrapper")
                ? {
                    animationPlayState: "running",
                  }
                : {}
            }
          >
            {AboutUs.details_via_Telegram}
          </div>
          <div
            className="work-process-step four-step"
            style={
              chekVisible(".work-process-wrapper")
                ? {
                    animationPlayState: "running",
                  }
                : {}
            }
          >
            {AboutUs.finished_job}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;
