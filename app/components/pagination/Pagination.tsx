import Link from 'next/link';
import styles from './Pagination.module.scss';


interface PaginationProps {
  currentPage: number;
  totalPages: number;
  url: string;
  showPages?: number;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, url, showPages = 2 }) => {
  const adjacentPages = Math.min(showPages, totalPages);
  const startPage = Math.max(1, currentPage - Math.floor(adjacentPages / 2));
  const endPage = Math.min(totalPages, startPage + adjacentPages);

  const pages = Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);

  return (
    <div className={styles.pagination}>

      {startPage > 1 && (
        <>
          <Link href={`${url}1`} passHref>
            <div className={styles.paginationItem}>1</div>
          </Link>
          {startPage > 2 && <div className={styles.paginationItem}>...</div>}
        </>
      )}

      {pages.map((pageNumber) => (
        <Link key={pageNumber} href={`${url}${pageNumber}`} passHref>
          <div className={`${styles.paginationItem} ${pageNumber == currentPage ? styles.active : ''}`}>{pageNumber}</div>
        </Link>
      ))}

      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && <div className={styles.paginationItem}>...</div>}
          <Link href={`${url}${totalPages}`} passHref>
            <div className={styles.paginationItem}>{totalPages}</div>
          </Link>
        </>
      )}
    </div>
  );
};

export default Pagination;