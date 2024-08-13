"use client"
import React, { useMemo } from "react";
import { useBlogContext } from "../BlogContext";
import { initialArticles } from "@/app/data/blog_data";
import { Locale } from "@/i18n.config";
import styles from "./same_styles.module.scss";
import Image from "next/image";
import time from "@/public/img/Blog/Articles_img/Clock.png";
import Link from "next/link";

export default function SameArticles({ lang }: { lang: Locale }) {
  const { activeArticle } = useBlogContext();

  const getRandomArticles = (count: number) => {
    const randomArticles = new Set<number>();
    while (randomArticles.size < count) {
      const randomIndex = Math.floor(Math.random() * initialArticles.length);
      if (initialArticles[randomIndex].id !== activeArticle.id) {
        randomArticles.add(randomIndex);
      }
    }
    return Array.from(randomArticles).map((index) => initialArticles[index]);
  };

  // Використовуємо useMemo для кешування результатів функції getRandomArticles
  const randomArticles = useMemo(() => getRandomArticles(2), [activeArticle]);

  const renderArticles = () => {
    return randomArticles.map((article) => (
      <Link key={article.id} href={`/${lang}/blog/${article.id}`} passHref>
        <div className={styles.card}>
          <div className={styles.card__image}>
            <img
              src={article.image}
              alt={article.title}
              width={380}
              height={200}
            />
          </div>
          <div className={styles.card__title}>{article.title}</div>
          <div className={styles.card__subTitle}>{article.subTitle}</div>
          <div className={styles.card__row}>
            <div className={styles.card__time}>
              <Image src={time} alt="time" width={20} height={20} />
              {article.time}
            </div>
            <div className={styles.card__views}>
              {article.views} {lang === "ua" ? "Переглядів" : "Просмотров"}
            </div>
          </div>
        </div>
      </Link>
    ));
  };

  return (
    <div className={styles.SameArticles}>
      <div className={styles.SameArticles__title}>
        {lang === "ua" ? "Схожі статті" : "Похожие статьи"}
      </div>
      <div className={styles.SameArticles__row}>
        {renderArticles()}
        <div className={styles.card}>
          <div className={styles.card__title} style={{ flexGrow: "0" }}>
            {activeArticle.moreInf.title}
          </div>
          <div className={styles.card__subTitle} style={{ flexGrow: "1" }}>
            {activeArticle.moreInf.subTitle}
          </div>
          <div className={styles.card__row}>
            <div className={styles.card__time}>
              <Image src={time} alt="time" width={20} height={20} />
              {activeArticle.time}
            </div>
            <div className={styles.card__views}>
              {activeArticle.views}{" "}
              {lang === "ua" ? "Переглядів" : "Просмотров"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
