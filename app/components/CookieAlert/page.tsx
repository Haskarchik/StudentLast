"use client";
import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";

interface cookieAlert {
  text: string;
  agreeBtn: string;
  moreBtn: string;
}
export default function CookieAlert({ info }: { info: cookieAlert }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const visitCookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("visit="));
    if (!visitCookie) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    document.cookie = "visit=true; path=/; max-age=31536000";
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className={styles.cookie_alert}>
        <div className={styles.cookie_alert_row}>
          <div className={styles.cookie_alert_text}>{info.text}</div>
          <div className={styles.cookie_alert_btns}>
            <button
              className={styles.cookie_alert_bagreeBtn}
              onClick={handleAccept}
            >
              {info.agreeBtn}
            </button>
            <a
              href="https://ru.wikipedia.org/wiki/Cookie"
              className={styles.cookie_alert_moreBtn}
            >
              {info.moreBtn}
            </a>
          </div>
        </div>
      </div>
    )
  );
}
