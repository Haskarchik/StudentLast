import { useBlogContext } from "@/app/[lang]/blog/BlogContext";
import React, { useState } from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import arrow from "../../../public/img/Blog/Articles_img/Arrow.png";

export default function BlogPagination() {
  const { articles, setPage } = useBlogContext();
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 8;
  const totalPages = Math.ceil(articles.length / articlesPerPage);

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
    setPage(page);
  };

  const pagesCount = () => {
    const pages = [];
    const maxVisiblePages = 5;
    let startPage = 1;
    let endPage = totalPages;

    if (totalPages > maxVisiblePages) {
      if (currentPage <= 3) {
        startPage = 1;
        endPage = 4;
        pages.push(
          ...[...Array(endPage - startPage + 1)].map((_, idx) => {
            const page = startPage + idx;
            return (
              <li key={page} className={styles.blogPagination__listItem}>
                <button onClick={() => handlePageClick(page)}>{page}</button>
              </li>
            );
          })
        );
        pages.push(
          <li key="more" className={styles.blogPagination__listItem}>
            ...
          </li>
        );
      } else if (currentPage + 2 >= totalPages) {
        startPage = totalPages - 3;
        endPage = totalPages;
        pages.push(
          <li key="less" className={styles.blogPagination__listItem}>
            ...
          </li>
        );
        pages.push(
          ...[...Array(endPage - startPage + 1)].map((_, idx) => {
            const page = startPage + idx;
            return (
              <li key={page} className={styles.blogPagination__listItem}>
                <button onClick={() => handlePageClick(page)}>{page}</button>
              </li>
            );
          })
        );
      } else {
        startPage = currentPage - 2;
        endPage = currentPage + 2;
        pages.push(
          <li key="less" className={styles.blogPagination__listItem}>
            ...
          </li>
        );
        pages.push(
          ...[...Array(endPage - startPage + 1)].map((_, idx) => {
            const page = startPage + idx;
            return (
              <li key={page} className={styles.blogPagination__listItem}>
                <button onClick={() => handlePageClick(page)}>{page}</button>
              </li>
            );
          })
        );
        pages.push(
          <li key="more" className={styles.blogPagination__listItem}>
            ...
          </li>
        );
      }
    } else {
      pages.push(
        ...[...Array(totalPages)].map((_, idx) => {
          const page = idx + 1;
          return (
            <li
              key={page}
              className={
                currentPage == page
                  ?  styles.active
                  : styles.not_active
              }
            >
              <button onClick={() => handlePageClick(page)}>{page}</button>
            </li>
          );
        })
      );
    }

    return pages;
  };

  return (
    <div className={styles.blogPagination}>
      <div className={styles.blogPagination__row}>
        <div
          className={styles.blogPagination__prevBtn}
          onClick={() => handlePageClick(currentPage > 1 ? currentPage - 1 : 1)}
        >
          <Image src={arrow} alt="Prev page" width={10} height={30} />
        </div>
        <ul className={styles.blogPagination__list}>{pagesCount()}</ul>
        <div
          className={styles.blogPagination__nextBtn}
          onClick={() =>
            handlePageClick(
              currentPage < totalPages ? currentPage + 1 : totalPages
            )
          }
        >
          <Image src={arrow} alt="Next page" width={10} height={30} />
        </div>
      </div>
    </div>
  );
}
