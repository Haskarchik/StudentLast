import { getDictionary } from "@/lib/dictionary";
import React from "react";
import "./style.scss"
export default async function Oferta(
  { params: { lang } }
) {
  const { Oferta } = await getDictionary(lang);

  return (
    <div className="Oferta_page">
      <div className="Oferta_title">{Oferta.title}</div>
      <div className="Oferta_desc">{Oferta.desc}</div>
      <h2 className="Oferta_first_chapter_title">
        {Oferta.first_chapter_title}
      </h2>
      <ul className="Oferta_first_chapter_desc">
        {Oferta.first_chapter_desc.map((el) => {
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
      <h2 className="Oferta_second_chapter_title">
        {Oferta.second_chapter_title}
      </h2>
      <ul className="Oferta_second_chapter_desc">
        {Oferta.second_chapter_desc.map((el) => {
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
      <h2 className="Oferta_third_chapter_title">
        {Oferta.third_chapter_title}
      </h2>
      <ul className="Oferta_third_chapter_desc">
        {Oferta.third_chapter_desc.map((el) => {
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
      <h2 className="Oferta_four_chapter_title">{Oferta.four_chapter_title}</h2>
      <ul className="Oferta_four_chapter_desc">
        {Oferta.four_chapter_desc.map((el) => {
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
      <h2 className="Oferta_five_chapter_title">{Oferta.five_chapter_title}</h2>
      <ul className="Oferta_five_chapter_desc">
        {Oferta.five_chapter_desc.map((el) => {
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
      <h2 className="Oferta_six_chapter_title">{Oferta.six_chapter_title}</h2>
      <ul className="Oferta_six_chapter_desc">
        {Oferta.six_chapter_desc.map((el) => {
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
      <h2 className="Oferta_seven_chapter_title">
        {Oferta.seven_chapter_title}
      </h2>
      <ul className="Oferta_seven_chapter_desc">
        {Oferta.seven_chapter_desc.map((el) => {
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
      <h2 className="Oferta_eight_chapter_title">
        {Oferta.eight_chapter_title}
      </h2>
      <ul className="Oferta_eight_chapter_desc">
        {Oferta.eight_chapter_desc.map((el) => {
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
      <h2 className="Oferta_nine_chapter_title">{Oferta.nine_chapter_title}</h2>
      <ul className="Oferta_nine_chapter_desc">
        {Oferta.nine_chapter_desc.map((el) => {
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
      <h2 className="Oferta_ten_chapter_title">{Oferta.ten_chapter_title}</h2>
      <ul className="Oferta_ten_chapter_desc">
        {Oferta.ten_chapter_desc.map((el) => {
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
