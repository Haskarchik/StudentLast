import React from "react";
import styles from "./ArticleList.module.scss";
import Link from "next/link";
import { Article, useBlogContext } from "@/app/[lang]/blog/BlogContext";
import { Locale } from "@/i18n.config";

const ArticleList = ({
  articles,
  lang,
}: {
  articles: Article[];
  lang: Locale;
}) => {
  const { activeArticle, setactiveArticle } = useBlogContext();
  const handleArticleClick = (article: Article) => {
    setactiveArticle(article);    
  };

  return (
    <div className={styles.articles}>
      {articles.map((article) => (
        <Link
          onClick={() => handleArticleClick(article)}
          href={`/${lang}/blog/${article.id}`}
          key={article.id}
        >
          <div key={article.id} className={styles.article}>
            <img src={article.image} alt={article.title} />
            <div className={styles.articleContent}>
              <h2>{article.title}</h2>
              <p>{article.subTitle}</p>
              <div>{article.views}</div>
            </div>
            <div className={styles.articleMeta}>
              <span className={styles.views}>{article.time}</span>
              <span className={styles.date}>{article.date}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ArticleList;
