"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Article, useBlogContext } from "../BlogContext";
import style from "./style.module.scss";
import Image from "next/image";
import { isArray } from "util";
export default function ClientPage() {
  const { articles } = useBlogContext();
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);
  const path = usePathname()?.slice(9);

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
      {activeArticle.title}
      <div className={style.article__picture}>
        <Image
          src={activeArticle.image}
          alt={activeArticle.title + " Picture"}
          width={100}
          height={100}
        />
      </div>
      <div className={style.article__subtitle}>{activeArticle.subTitle}</div>
      <h2 className={style.article__chapter}>{activeArticle.chapter_1}</h2>
      <div className={style.article__chapter_text}>
        {activeArticle.chapter_1_text.map((el: string | string[]) => {
          if (el === "") {
            return "";
          }
          if (isArray(el)) {
            return (
              <ul>
                {el.map((SubEl: any) => {
                  return <li>{SubEl}</li>;
                })}
              </ul>
            );
          } else {
            return <li>{el}</li>;
          }
        })}
      </div>
      <h2 className={style.article__chapter}>{activeArticle.chapter_2}</h2>
      <div className={style.article__chapter_text}>
        {activeArticle.chapter_2_text.map((el: string | string[]) => {
          if (el === "") {
            return "";
          }
          if (isArray(el)) {
            return (
              <ul>
                {el.map((SubEl: any) => {
                  return <li>{SubEl}</li>;
                })}
              </ul>
            );
          } else {
            return <li>{el}</li>;
          }
        })}
      </div>
      <h2 className={style.article__chapter}>{activeArticle.chapter_3}</h2>
      <div className={style.article__chapter_text}>
        {activeArticle.chapter_3_text.map((el: string | string[]) => {
          if (el === "") {
            return "";
          }
          if (isArray(el)) {
            return (
              <ul>
                {el.map((SubEl: any) => {
                  return <li>{SubEl}</li>;
                })}
              </ul>
            );
          } else {
            return <li>{el}</li>;
          }
        })}
      </div>
      <h2 className={style.article__chapter}>{activeArticle.chapter_4}</h2>
      <div className={style.article__chapter_text}>
        {activeArticle.chapter_4_text.map((el: string | string[]) => {
          if (el === "") {
            return "";
          }
          if (isArray(el)) {
            return (
              <ul>
                {el.map((SubEl: any) => {
                  return <li>{SubEl}</li>;
                })}
              </ul>
            );
          } else {
            return <li>{el}</li>;
          }
        })}
      </div>
      <h2 className={style.article__chapter}>{activeArticle.chapter_5}</h2>
      <div className={style.article__chapter_text}>
        {activeArticle.chapter_5_text.map((el: string | string[]) => {
          if (el === "") {
            return "";
          }
          if (isArray(el)) {
            return (
              <ul>
                {el.map((SubEl: any) => {
                  return <li>{SubEl}</li>;
                })}
              </ul>
            );
          } else {
            return <li>{el}</li>;
          }
        })}
      </div>
      <h2 className={style.article__chapter}>{activeArticle.chapter_6}</h2>
      <div className={style.article__chapter_text}>
        {activeArticle.chapter_6_text.map((el: string | string[]) => {
          if (el === "") {
            return "";
          }
          if (isArray(el)) {
            return (
              <ul>
                {el.map((SubEl: any) => {
                  return <li>{SubEl}</li>;
                })}
              </ul>
            );
          } else {
            return <li>{el}</li>;
          }
        })}
      </div>
    </div>
  );
}
