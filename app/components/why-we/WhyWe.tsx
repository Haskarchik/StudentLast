// components/WhyWe.tsx

"use client";

import React, { FC,  } from "react";
import "./WhyWe.scss";
import { chekVisible } from "../visible-cheker/isVisible";

interface DataItem {
  text: string;
}

interface WhyWeProps {
  data: DataItem[];
  AboutUs: { why_us: string };
}

const WhyWe: FC<WhyWeProps> = ({ data, AboutUs }) => {

  return (
    <div className="wrapper-why">
      <span className="span-sub-article span-title">{AboutUs.why_us}</span>
      <ul className="why-item">
        {data.map((item, index) => (
          <li
            key={index}
            style={chekVisible('.wrapper-why') ? { animationPlayState: "running" } : {}}
          >
            <p>{item.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WhyWe;
