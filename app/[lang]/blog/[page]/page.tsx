"use client";
import { Locale } from "@/i18n.config";
import ClientPage from "./ClientPage";
import SameArticles from "./SameArticles";
import styles from "./style.module.scss";
interface BlogProps {
  params: {
    lang: Locale;
  };
}
export default function Article({ params: { lang } }: BlogProps) {
  return (
    <div className={styles.article__page}>
      <ClientPage />
      <SameArticles lang={lang} />
    </div>
  );
}
