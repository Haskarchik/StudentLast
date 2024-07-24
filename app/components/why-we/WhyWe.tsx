import React, { useEffect } from "react";
import "./WhyWe.scss";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

interface DataItem {
  text: string;
}

interface DataListProps {
  data: DataItem[];
  lang:Locale
}

const WhyWe =async ({ data,lang }: DataListProps) => {
  const {AboutUs}=await getDictionary(lang);
  return (
    <div className="wrapper-why">
      <span className="span-sub-article span-title">{AboutUs.why_us}</span>
      <ul className="why-item">
        {data.map((text, index) => (
          <li key={index}>
            <p>{text.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WhyWe;
