"use client";
import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
  ReactNode,
  useEffect,
} from "react";

import { initialArticles, initialArticlesRu } from "../../data/blog_data";
import { Locale } from "@/i18n.config";

type SortBy = "date" | "name" | "views";

interface BlogContextProps {
  articles: Article[];
  sortBy: SortBy;
  activeArticle: Article;
  activePage: number;
  setSortBy: (sortBy: SortBy) => void;
  setActiveArticle: (article: Article) => void;
  setPage: (page: number) => void;
  setLang: (lang: Locale) => void;
  displayedArticles: () => Article[];
}

export interface Article {
  moreInf: any;
  id: string;
  title: string;
  subTitle: string;
  views: number;
  time: string;
  date: string;
  image: string;
  paragraph_1: string;
  chapter_1: string;
  chapter_1_text: (string | string[])[];
  chapter_2: string;
  chapter_2_text: (string | string[])[];
  chapter_3: string;
  chapter_3_text: (string | string[])[];
  chapter_4: string;
  chapter_4_text: (string | string[])[];
  chapter_5: string;
  chapter_5_text: (string | string[])[];
  chapter_6: string;
  chapter_6_text: (string | string[])[];
}

const BlogContext = createContext<BlogContextProps | undefined>(undefined);

export const useBlogContext = () => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error("useBlogContext must be used within a BlogProvider");
  }
  return context;
};

interface BlogProviderProps {
  children: ReactNode;
}

export const BlogProvider = React.memo(({ children }: BlogProviderProps) => {
  const [lang, setLang] = useState<Locale>("ua");
  const [sortBy, setSortBy] = useState<SortBy>("date");
  const [activePage, setActivePage] = useState<number>(0);

  const articles = useMemo(() => {
    return lang === "ua" ? initialArticles : initialArticlesRu;
  }, [lang]);

  const activeArticle = useMemo(() => {
    return articles[0];
  }, [articles,lang]);

  const handleSortByChange = useCallback((sortBy: SortBy) => {
    setSortBy(sortBy);
    setActivePage(0); // Reset page on sort change
  }, []);

  const handleSetActiveArticle = useCallback((article: Article) => {
    // Update active article
  }, []);

  const handleSetPage = useCallback((page: number) => {
    setActivePage(page - 1);
  }, []);

  const sortedArticles = useMemo(() => {
    const sortArticles = (articles: Article[], sortBy: SortBy) => {
      switch (sortBy) {
        case "date":
          return articles.sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          );
        case "name":
          return articles.sort((a, b) => a.title.localeCompare(b.title));
        case "views":
          return articles.sort((a, b) => b.views - a.views);
        default:
          return articles;
      }
    };
    return sortArticles([...articles], sortBy);
  }, [articles, sortBy]);

  const displayedArticles = useCallback(() => {
    const articlesPerPage = 8;
    const start = activePage * articlesPerPage;
    return sortedArticles.slice(start, start + articlesPerPage);
  }, [sortedArticles, activePage]);

  return (
    <BlogContext.Provider
      value={{
        articles: sortedArticles,
        sortBy,
        activeArticle,
        activePage,
        setSortBy: handleSortByChange,
        setActiveArticle: handleSetActiveArticle,
        setPage: handleSetPage,
        displayedArticles,
        setLang,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
});
