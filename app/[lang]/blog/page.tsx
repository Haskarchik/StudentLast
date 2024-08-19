"use client";
import { useBlogContext } from "./BlogContext";
import ArticleList from "../../components/blogArticles/page";
import styles from "./Blog.module.scss";
import BlogPagination from "@/app/components/blogPagination/page";
import { Locale } from "@/i18n.config";
import { BlogProvider } from "./BlogContext";
import { useEffect } from "react";

interface BlogProps {
  params: {
    lang: Locale;
  };
}

export default function Blog({ params: { lang } }: BlogProps) {
  const { articles, sortBy, setSortBy, displayedArticles, setLang } =
    useBlogContext();
  useEffect(() => {
    setLang(lang);
  }, [lang, setLang]);

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

        <ArticleList articles={displayedArticles()} lang={lang} />
        <BlogPagination />
      </main>
    </div>
  );
}
