"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./style.module.scss";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Locale, i18n } from "@/i18n.config";

const SetLanguage = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const items = [
    { id: 1, src: "../../assets/flags/FlagUA.svg", code: "ua" },
    { id: 2, src: "../../assets/flags/FlagRU.svg", code: "en" },
    /* { id: 3, src: '/Flags/FlagEN.png', code: 'en' }, */
  ];
  /*  const { i18n } = useTranslation(); */
  const [selectedItem, setSelectedItem] = useState(
    items.find((item) => item.code === lang)
  );
  console.log(lang);
  const [language, setLanguage] = useState(
    items.filter((element) => element.id !== selectedItem.id)
  );
  const { pathname, asPath, query } = router;

  const handleItemClick = (item) => {
    setIsOpen(false);
    setSelectedItem(item);
    setLanguage(items.filter((element) => element.id !== item.id));
    router
      .replace({ pathname, query }, asPath, { locale: item.code })
      .then(() => {
        i18n.changeLanguage(item.code);
      });
    isOpen
      ? document.body.classList.remove("overflow-hidden")
      : document.body.classList.add("overflow-hidden");
    setIsOpen(!isOpen);
  };

  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);
  return (
    <div
      ref={ref}
      className={styles.dropdown_container}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div
        className={
          isOpen
            ? styles.dropdown_header
            : styles.dropdown_header + " " + styles.dropdown_header_open
        }
      >
        <Image
          style={{
            borderRadius: "5px",
            borderStyle: "solid",
            borderWidth: "0.1px",
            borderColor: "white",
          }}
          width={40}
          height={24}
          src={selectedItem.src}
          alt="flag select country"
        />
      </div>
      <div
        className={
          isOpen
            ? styles.dropdown_list + " " + styles.open
            : styles.dropdown_list
        }
      >
        {language.map((item) => (
          <div
            key={item.id}
            className={styles.dropdown_item}
            onClick={() => handleItemClick(item)}
          >
            <Image
              width={40}
              height={28}
              src={item.src}
              style={{
                borderRadius: "5px",
                borderStyle: "solid",
                borderWidth: "1px",
                borderColor: "white",
              }}
              alt="flag country"
            />
          </div>
        ))}
      </div>
      <div
        className={
          isOpen
            ? styles.down_arrow + " " + styles.down_arrow_open
            : styles.down_arrow
        }
      ></div>
    </div>
  );
};

export default SetLanguage;
