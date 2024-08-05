import React from "react";
import styles from "./ArticleList.module.scss";
import Link from "next/link";

const ArticleList = ({ articles,lang }) => {

  return (
    <div className={styles.articles}>
      {articles.map((article) => (
        <Link href={`/${lang}/blog/${article.id}`} key={article.id}>
          <div key={article.id} className={styles.article}>
            <img src={article.image} alt={article.title} />
            <div className={styles.articleContent}>
              <h2>{article.title}</h2>
              <p>{article.subTitle}</p>
              <div>{article.vievs}</div>
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
