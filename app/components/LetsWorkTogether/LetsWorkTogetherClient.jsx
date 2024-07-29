// components/LetsWorkTogetherClient.jsx
"use client";
import styles from "./style.module.scss";
import ContactFormClient from "../ContactForm/index";
import { useTranslation } from "react-i18next";

const LetsWorkTogetherClient = ({ lang, contactUs }) => {
  const { t } = useTranslation();

  return (
    <div className={styles["work-together"]}>
      <div className={styles["work-together__content"]}>
        <h1 className={styles["work-together__title"]}>
          {t(contactUs.title)}
        </h1>
        <h3
          className={styles["work-together__desc"]}
          dangerouslySetInnerHTML={{ __html: t(contactUs.desc) }}
        ></h3>
      </div>
      <div className={styles["work-together__form"]}>
        <ContactFormClient variant="contacts" lang={lang} contactUs={contactUs} />
      </div>
    </div>
  );
};

export default LetsWorkTogetherClient;
