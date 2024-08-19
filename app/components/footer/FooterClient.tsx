"use client";

import React, { useState } from "react";
import "./Footer.scss";
import { FaInstagram, FaTelegramPlane, FaTiktok } from "react-icons/fa";
import { Locale } from "@/i18n.config";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo_white.svg";
import { useRouter } from "next/navigation";

const FooterClient = ({
  lang,
  Routes,
  Performer,
  footer
}: {
  lang: Locale;
  Routes: any;
  Performer: any;
  footer:any
}) => {
  const [currentLang, setCurrentLang] = useState<Locale>(lang);
  const router = useRouter();

  const switchLanguage = async (newLang: Locale) => {
    setCurrentLang(newLang);

    // Get the current URL
    const currentUrl = new URL(window.location.href);
    const currentPath =
      currentUrl.pathname.includes("/ua/") ||
      currentUrl.pathname.includes("/ru/")
        ? currentUrl.pathname.slice(3)
        : currentUrl.pathname.slice(3);
    const currentSearch = currentUrl.search;

    try {
      // Replace the current URL with the new language prefix
      await router.push(`/${newLang}${currentPath}${currentSearch}`);
    } catch (error) {
      console.error("Error changing language:", error);
    }
  };

  return (
    <div className="wrapper-footer">
      <div className="footer-item">
        <Link href={`/${currentLang}`}>
          <Image width={400} height={100} src={logo} alt="logo" />
        </Link>
        <div className="language_switch">
          <div
            className={`ua ${currentLang === "ua" ? "" : "active"}`}
            onClick={() => (currentLang == "ua" ? "" : switchLanguage("ua"))}
            style={
              currentLang == "ua"
                ? { cursor: "default" }
                : { cursor: "pointer" }
            }
          >
               {footer.ua}
          </div>
          <div
            className={`ru ${currentLang === "ru" ? "" : "active"}`}
            onClick={() => (currentLang == "ru" ? "" : switchLanguage("ru"))}
            style={
              currentLang == "ru"
                ? { cursor: "default" }
                : { cursor: "pointer" }
            }
          >
           {footer.ru}
          </div>
        </div>
      </div>
      <div className="footer_navigatin">
        <div className="footer_navigatin_title">{footer.label}</div>
        <div className="footer-items">
          <div className="footer-item-box">
            <Link className="footer-item" href={`/${currentLang}`}>
              {Routes.main_page}
            </Link>
          </div>
          <div className="footer-item-box">
            <Link className="footer-item" href={`/${currentLang}/aboutus`}>
              {Routes.aboutUs}
            </Link>
          </div>
          <div className="footer-item-box">
            <Link className="footer-item" href={`/${currentLang}/services/1`}>
              {Routes.services}
            </Link>
          </div>
          <div className="footer-item-box">
            <Link
              className="footer-item"
              href={`/${currentLang}/reviews/all/1`}
            >
              {Routes.reviews}
            </Link>
          </div>
          <div className="footer-item-box">
            <Link className="footer-item" href={`/${currentLang}/performer`}>
              {Routes.performer}
            </Link>
          </div>
          <div className="footer-item-box">
            <Link className="footer-item" href={`/${currentLang}/blog`}>
              {Routes.blog}
            </Link>
          </div>
          <div className="footer-item-box">
            <Link className="footer-item" href={`/${currentLang}/contact`}>
              {Routes.contact}
            </Link>
          </div>
        </div>
      </div>
      <div className="copyright-block">
        <div className="footer-icon">
          <a
            href="https://t.me/student_helper_official"
            target="_blank"
            rel="noreferrer"
          >
            <div className="logo-circle">
              <FaTelegramPlane className="logo-footer" />
            </div>
          </a>
          <a
            href="https://www.tiktok.com/@student_helper_official?_t=8fNJV8RjsF4"
            target="_blank"
            rel="noreferrer"
          >
            <div className="logo-circle">
              <FaTiktok color="white" widths={"100%"} className="logo-footer" />
            </div>
          </a>
          <a
            href="https://instagram.com/student_helper_official?igshid=MzRlODBiNWFlZA=="
            target="_blank"
            rel="noreferrer"
          >
            <div className="logo-circle">
              <FaInstagram className="logo-footer" />
            </div>
          </a>
        </div>
        <div className={"copyrights"}>
          {currentLang === "ua"
            ? "Student Helper - Всі права захищені."
            : "Student Helper - Все права защищены."}
        </div>
        <div className="politic">
          <Link href={`/${lang}/political`}>{footer.police}</Link>
          <Link href={`/${lang}/oferta`}>{footer.oferta}</Link>
          <Link href={`/${lang}/cookie`}>{footer.cookie}</Link>
        </div>
      </div>
    </div>
  );
};

export default FooterClient;
