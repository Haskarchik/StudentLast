import { getDictionary } from "@/lib/dictionary";
import React from "react";
import "./style.scss"

export default async function Cookie(
  { params: { lang } } 
) {
  const { Cookie } = await getDictionary(lang);

  return (
    <div className="Cookie_page">
      <div className="Cookie_title">{Cookie.title}</div>
      <div className="Cookie_desc">{Cookie.desc}</div>
      <h2 className="Cookie_first_chapter_title">
        {Cookie.first_chapter_title}
      </h2>
      <ul className="Cookie_first_chapter_desc">
        {Cookie.first_chapter_desc.map((el) => {
          if (el.length <10) {
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
      <h2 className="Cookie_second_chapter_title">
        {Cookie.second_chapter_title}
      </h2>
      <ul className="Cookie_second_chapter_desc">
        {Cookie.second_chapter_desc.map((el) => {
          if (el.length <10) {
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
      <h2 className="Cookie_third_chapter_title">
        {Cookie.third_chapter_title}
      </h2>
      <ul className="Cookie_third_chapter_desc">
        {Cookie.third_chapter_desc.map((el) => {
          if (el.length <10) {
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
      <h2 className="Cookie_four_chapter_title">
        {Cookie.four_chapter_title}
      </h2>
      <ul className="Cookie_four_chapter_desc">
        {Cookie.four_chapter_desc.map((el) => {
           if (el.length <10) {
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
      <h2 className="Cookie_five_chapter_title">
        {Cookie.five_chapter_title}
      </h2>
      <ul className="Cookie_five_chapter_desc">
        {Cookie.five_chapter_desc.map((el) => {
          if (el.length <10) {
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
      <h2 className="Cookie_six_chapter_title">
        {Cookie.six_chapter_title}
      </h2>
      <ul className="Cookie_six_chapter_desc">
        {Cookie.six_chapter_desc.map((el) => {
          return <li>{el}</li>;
        })}
      </ul>
    </div>
  );
}
