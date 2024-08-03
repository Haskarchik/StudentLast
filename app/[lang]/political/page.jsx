import { getDictionary } from "@/lib/dictionary";
import React from "react";
import "./style.scss";
export default async function Political({ params: { lang } }) {
  const { Political } = await getDictionary(lang);

  return (
    <div className="political_page">
      <div className="political_title">{Political.title}</div>
      <div className="political_desc">{Political.desc}</div>
      <h2 className="political_first_chapter_title">
        {Political.first_chapter_title}
      </h2>
      <ul className="political_first_chapter_desc">
        {Political.first_chapter_desc.map((el) => {
          if (el.length < 10) {
            return (
              <ul>
                {el.map((SubEl) => {
                  return <li>{SubEl}</li>;
                })}
              </ul>
            );
          } else {
            return <li>{el}</li>;
          }
        })}
      </ul>
      <h2 className="political_second_chapter_title">
        {Political.second_chapter_title}
      </h2>
      <ul className="political_second_chapter_desc">
        {Political.second_chapter_desc.map((el) => {
          if (el.length < 10) {
            return (
              <ul>
                {el.map((SubEl) => {
                  return <li>{SubEl}</li>;
                })}
              </ul>
            );
          } else {
            return <li>{el}</li>;
          }
        })}
      </ul>
      <h2 className="political_third_chapter_title">
        {Political.third_chapter_title}
      </h2>
      <ul className="political_third_chapter_desc">
        {Political.third_chapter_desc.map((el) => {
          if (el.length < 10) {
            return (
              <ul>
                {el.map((SubEl) => {
                  return <li>{SubEl}</li>;
                })}
              </ul>
            );
          } else {
            return <li>{el}</li>;
          }
        })}
      </ul>
      <h2 className="political_four_chapter_title">
        {Political.four_chapter_title}
      </h2>
      <ul className="political_four_chapter_desc">
        {Political.four_chapter_desc.map((el) => {
          if (el.length < 10) {
            return (
              <ul>
                {el.map((SubEl) => {
                  return <li>{SubEl}</li>;
                })}
              </ul>
            );
          } else {
            return <li>{el}</li>;
          }
        })}
      </ul>
      <h2 className="political_five_chapter_title">
        {Political.five_chapter_title}
      </h2>
      <ul className="political_five_chapter_desc">
        {Political.five_chapter_desc.map((el) => {
          if (el.length < 10) {
            return (
              <ul>
                {el.map((SubEl) => {
                  return <li>{SubEl}</li>;
                })}
              </ul>
            );
          } else {
            return <li>{el}</li>;
          }
        })}
      </ul>
      <h2 className="political_six_chapter_title">
        {Political.six_chapter_title}
      </h2>
      <ul className="political_six_chapter_desc">
        {Political.six_chapter_desc.map((el) => {
          if (el.length < 10) {
            return (
              <ul>
                {el.map((SubEl) => {
                  return <li>{SubEl}</li>;
                })}
              </ul>
            );
          } else {
            return <li>{el}</li>;
          }
        })}
      </ul>
    </div>
  );
}
