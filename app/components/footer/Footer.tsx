import "./Footer.scss";
import { FaInstagram, FaTelegramPlane, FaTiktok } from "react-icons/fa";
import { contactInfo } from "../../data/contactInfo";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import Link from "next/link";
import Image from "next/image";

const Footer = async({lang}:{lang:Locale}) => {

  return (
    <div className="wrapper-footer">
      <div className="footer-item">
        <Link href={`/${lang}`}>
          <Image width={100} height={50} src={"/review-photos/logo.jpg"} alt="logo"  />
        </Link>
      </div>
      {/*<span className="span-footer">Student Helper</span>*/}
      <p>
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
      </p>
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
        <div className={"copyrights"}>Student Helper - All rights reserved</div>
      </div>
    </div>
  );
};

export default Footer;
