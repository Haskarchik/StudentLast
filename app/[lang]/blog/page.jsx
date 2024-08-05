"use client";
import { useState, useEffect } from "react";
import ArticleList from "../../components/blogArticles/page";
import styles from "./Blog.module.scss";
import { initialArticles } from "../../data/blog_data";
import BlogPagination from "@/app/components/blogPagination/page";
export default function Blog({}) {
  const [articles, setArticles] = useState(initialArticles);
  const [sortBy, setSortBy] = useState("date");

  useEffect(() => {
    const sortArticles = (articles, sortBy) => {
      switch (sortBy) {
        case "date":
          return articles.sort((a, b) => new Date(b.date) - new Date(a.date));
        case "name":
          return articles.sort((a, b) => a.title.localeCompare(b.title));
        case "views":
          return articles.sort((a, b) => b.views - a.views);
        default:
          return articles;
      }
    };
    setArticles(sortArticles([...initialArticles], sortBy));
  }, [sortBy, initialArticles]);

  return (
    <div className={styles.container}>
      <main>
        <header className={styles.header}>
          <h1>Статті</h1>
          <span className={styles.line}></span>
          <div className={styles.sortOptions}>
            Сортувати за:
            <span
              className={`${styles.sortOption} ${
                sortBy === "date" ? styles.active : ""
              }`}
              onClick={() => setSortBy("date")}
            >
              Date
            </span>
            <span
              className={`${styles.sortOption} ${
                sortBy === "name" ? styles.active : ""
              }`}
              onClick={() => setSortBy("name")}
            >
              Name
            </span>
            <span
              className={`${styles.sortOption} ${
                sortBy === "views" ? styles.active : ""
              }`}
              onClick={() => setSortBy("views")}
            >
              Views
            </span>
          </div>
        </header>

        <ArticleList articles={articles} />
        <BlogPagination/>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${process.env.HOST}/api/articles`);
  const initialArticles = await res.json();

  return {
    props: {
      initialArticles,
    },
  };
}
