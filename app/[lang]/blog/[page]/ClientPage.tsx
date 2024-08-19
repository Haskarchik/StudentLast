"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Article, useBlogContext } from "../BlogContext";
import style from "./style.module.scss";
import Image from "next/image";
import { isArray } from "util";
import { Locale } from "@/i18n.config";
export default function ClientPage({ lang }: { lang: Locale }) {
  const { articles, setLang } = useBlogContext();
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);
  const path = usePathname()?.slice(9);
  setLang(lang);
  useEffect(() => {
    if (path) {
      const foundArticle = articles.find((el) => el.id === path);
      setActiveArticle(foundArticle || null);
    }
  }, [path, articles]);

  if (!activeArticle)
    return (
      <section className={style.dots_container}>
        <div className={style.dot}></div>
        <div className={style.dot}></div>
        <div className={style.dot}></div>
        <div className={style.dot}></div>
        <div className={style.dot}></div>
      </section>
    );

  return (
    <div key={activeArticle.id} className={style.article}>
      <div className={style.article__title}>{activeArticle.title}</div>
      <div className={style.article__picture}>
        <Image
          src={activeArticle.image}
          alt={activeArticle.title + " Picture"}
          width={1000}
          height={1000}
        />
      </div>
      <div className={style.article__subtitle}>{activeArticle.paragraph_1}</div>
      {activeArticle.chapter_1 !== "" && (
        <>
          <h2 className={style.article__chapter}>{activeArticle.chapter_1}</h2>
          <ul className={style.article__chapter_text}>
            {activeArticle.chapter_1_text.map((el: string | string[]) => {
              if (el === "") {
                return "";
              }
              if (isArray(el)) {
                return (
                  <ul>
                    {el.map((SubEl: any) => {
                      return (
                        <li
                          dangerouslySetInnerHTML={{
                            __html: SubEl,
                          }}
                        ></li>
                      );
                    })}
                  </ul>
                );
              } else {
                return (
                  <li
                    dangerouslySetInnerHTML={{
                      __html: el,
                    }}
                  ></li>
                );
              }
            })}
          </ul>
        </>
      )}
      {activeArticle.chapter_2 !== "" && (
        <>
          <h2 className={style.article__chapter}>{activeArticle.chapter_2}</h2>
          <ul className={style.article__chapter_text}>
            {activeArticle.chapter_2_text.map((el: string | string[]) => {
              if (el === "") {
                return "";
              }
              if (isArray(el)) {
                return (
                  <ol>
                    {el.map((SubEl: any) => {
                      return (
                        <li
                          dangerouslySetInnerHTML={{
                            __html: SubEl,
                          }}
                        ></li>
                      );
                    })}
                  </ol>
                );
              } else {
                return (
                  <li
                    dangerouslySetInnerHTML={{
                      __html: el,
                    }}
                  ></li>
                );
              }
            })}
          </ul>
        </>
      )}
      {activeArticle.chapter_3 !== "" && (
        <>
          {" "}
          <h2 className={style.article__chapter}>{activeArticle.chapter_3}</h2>
          <ul className={style.article__chapter_text}>
            {activeArticle.chapter_3_text.map((el: string | string[]) => {
              if (el === "") {
                return "";
              }
              if (isArray(el)) {
                return (
                  <ul>
                    {el.map((SubEl: any) => {
                      return (
                        <li
                          dangerouslySetInnerHTML={{
                            __html: SubEl,
                          }}
                        ></li>
                      );
                    })}
                  </ul>
                );
              } else {
                return (
                  <li
                    dangerouslySetInnerHTML={{
                      __html: el,
                    }}
                  ></li>
                );
              }
            })}
          </ul>
        </>
      )}
      {activeArticle.chapter_4 !== "" && (
        <>
          <h2 className={style.article__chapter}>{activeArticle.chapter_4}</h2>
          <ul className={style.article__chapter_text}>
            {activeArticle.chapter_4_text.map((el: string | string[]) => {
              if (activeArticle.chapter_4 === "") {
                return;
              }
              if (isArray(el)) {
                return (
                  <ul>
                    {el.map((SubEl: any) => {
                      return (
                        <li
                          dangerouslySetInnerHTML={{
                            __html: SubEl,
                          }}
                        ></li>
                      );
                    })}
                  </ul>
                );
              } else {
                return (
                  <li
                    dangerouslySetInnerHTML={{
                      __html: el,
                    }}
                  ></li>
                );
              }
            })}
          </ul>
        </>
      )}
      {activeArticle.chapter_5 !== "" && (
        <>
          <h2 className={style.article__chapter}>{activeArticle.chapter_5}</h2>
          <ul className={style.article__chapter_text}>
            {activeArticle.chapter_5_text.map((el: string | string[]) => {
              if (el === "") {
                return "";
              }
              if (isArray(el)) {
                return (
                  <ul>
                    {el.map((SubEl: any) => {
                      return (
                        <li
                          dangerouslySetInnerHTML={{
                            __html: SubEl,
                          }}
                        ></li>
                      );
                    })}
                  </ul>
                );
              } else {
                return (
                  <li
                    dangerouslySetInnerHTML={{
                      __html: el,
                    }}
                  ></li>
                );
              }
            })}
          </ul>
        </>
      )}
      {activeArticle.chapter_6 !== "" && (
        <>
          <h2 className={style.article__chapter}>{activeArticle.chapter_6}</h2>
          <ul className={style.article__chapter_text}>
            {activeArticle.chapter_6_text.map((el: string | string[]) => {
              if (activeArticle.chapter_6 === "") {
                return;
              }
              if (isArray(el)) {
                return (
                  <ul>
                    {el.map((SubEl: any) => {
                      return (
                        <li
                          dangerouslySetInnerHTML={{
                            __html: SubEl,
                          }}
                        ></li>
                      );
                    })}
                  </ul>
                );
              } else {
                return (
                  <li
                    dangerouslySetInnerHTML={{
                      __html: el,
                    }}
                  ></li>
                );
              }
            })}
          </ul>
        </>
      )}
    </div>
  );
}
