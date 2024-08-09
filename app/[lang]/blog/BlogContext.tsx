"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useCallback,
  useMemo,
} from "react";

import { initialArticles } from "../../data/blog_data";

type SortBy = "date" | "name" | "views";

interface BlogContextProps {
  articles: Article[];
  sortBy: SortBy;
  activeArticle: Article;
  setSortBy: (sortBy: SortBy) => void;
  setactiveArticle: (article: Article) => void;
}

export interface Article {
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

const BlogContext = createContext<BlogContextProps>({
  articles: initialArticles,
  activeArticle: initialArticles[0],
  sortBy: "date",
  setSortBy: () => {},
  setactiveArticle: () => {},
});

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
  const [articles, setArticles] = useState<Article[]>(initialArticles);
  const [sortBy, setSortBy] = useState<SortBy>("date");
  const [activeArticle, setactiveArticle] = useState<Article>(
    initialArticles[0]
  );

  const handleSortByChange = useCallback((sortBy: SortBy) => {
    setSortBy(sortBy);
  }, []);

  const handleSetactiveArticle = useCallback((article: Article) => {
    setactiveArticle(article);
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

  return (
    <BlogContext.Provider
      value={{
        articles: sortedArticles,
        sortBy,
        activeArticle,
        setSortBy: handleSortByChange,
        setactiveArticle: handleSetactiveArticle,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
});
