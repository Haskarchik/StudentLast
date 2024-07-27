import "./Footer.scss";
import { FaInstagram, FaTelegramPlane, FaTiktok } from "react-icons/fa";
import { contactInfo } from "../../data/contactInfo";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo.svg";

const Footer = async ({ lang }: { lang: Locale }) => {
  const { Routes, Performer } = await getDictionary(lang);

  return (
    <div className="wrapper-footer">
      <div className="footer-item">
        <Link  href={`/${lang}`}>
          <Image width={400} height={100} src={logo} alt="logo" />
        </Link>
        <div className="language_switch">
          <div className="ua active">Українська</div>
          <div className="ua">Російська</div>
        </div>
      </div>
      <div className="footer_navigatin">
        <div className="footer_navigatin_title">Сила у знаннях</div>
        <div className="footer-items">
          <div className="footer-item-box">
            <Link className="footer-item" href={`/${lang}`}>
              {Routes.main_page}
            </Link>
          </div>
          <div className="footer-item-box">
            <Link className="footer-item" href={`/${lang}/aboutus`}>
              {Routes.aboutUs}
            </Link>
          </div>
          <div className="footer-item-box">
            <Link className="footer-item" href={`/${lang}/services/1`}>
              {Routes.services}
            </Link>
          </div>
          <div className="footer-item-box">
            <Link className="footer-item" href={`/${lang}/reviews/all/1`}>
              {Routes.reviews}
            </Link>
          </div>
          <div className="footer-item-box">
            <Link className="footer-item" href={`/${lang}/performer`}>
              {Routes.performer}
            </Link>
          </div>
          <div className="footer-item-box">
            <Link className="footer-item" href={`/${lang}/blog`}>
              {Routes.blog}
            </Link>
          </div>
          <div className="footer-item-box">
            <Link className="footer-item" href={`/${lang}/contact`}>
              {Routes.contact}
            </Link>
          </div>
        </div>
      </div>

      {/*<span className="span-footer">Student Helper</span>*/}
      {/*  <p>
        <a
          type="email"
          href={`mailto:${contactInfo.email}`}
          className="contact-content"
        >
          {contactInfo.email}
        </a>
      </p>
      <p>
        <a
          type="tel"
          href={`tel:${contactInfo.phone}`}
          className="contact-content"
        >
          {contactInfo.phone}
        </a>
      </p> */}
      <div className="copyright-block">
        {/* <nav className="nav-footer">
          <p>Головна сторінка</p>
          <p>Про нас</p>
          <p>Послуги</p>
          <p>Відгуки</p>
          <p>Пошук</p>
        </nav> */}
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
          {lang == "ua"
            ? "Student Helper - Всі права захищені."
            : "Student Helper - Все права защищены."}
        </div>
      </div>
    </div>
  );
};

export default Footer;
