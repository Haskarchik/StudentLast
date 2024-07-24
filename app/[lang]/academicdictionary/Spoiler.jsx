import styles from './academStyle.module.scss'

const Spoiler = ({ title, children }) => {
  const showContent=true
  const color='transparent';

  return (
    <div className={styles.spoiler}>
      <div className={styles.spoiler_header}>
        <h2 style={{textShadow: `1px 1px 1px ${color}`}}>{title}</h2>
       
      </div>
      {showContent && <div className={styles.spoiler_content}>{children}</div>}
    </div>
  );
};

export default Spoiler;