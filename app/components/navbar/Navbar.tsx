import "./Navbar.scss";
import { Locale } from "@/i18n.config";
import Link from "next/link";
import { getDictionary } from "@/lib/dictionary";
import LanguageSelect from "../language-select/LanguageSelect";
import Image from "next/image";
import ContactsModal from "../contact-modal/ContactsModal";

const Navbar = async({lang}:{lang:Locale}) => {
  const {Routes,Performer}=await getDictionary(lang);
  return (
    <>
      <div className="wrapper-navbar">
        <a href={`/${lang}`} className="logo-navbar">
          <Image src={"/review-photos/logo.jpg"} width={200} height={50} alt="logo" />
        </a>
        <div className="navbar-items">
          <div className="navbar-item-box">
            <Link
              className="navbar-item"
              href={`/${lang}`}>
              {Routes.main_page}
            </Link>
          </div>
          <div className="navbar-item-box">
            <Link
              className="navbar-item"
              href={`/${lang}/aboutus`}>
              {Routes.aboutUs}
            </Link>
          </div>
          <div className="navbar-item-box">
            <Link
              className="navbar-item"
              href={`/${lang}/services/1`}>
              {Routes.services}
            </Link>
          </div>
          <div className="navbar-item-box">
            <Link
              className="navbar-item"
              href={`/${lang}/reviews/all/1`}>
              {Routes.reviews}
            </Link>
          </div>
          <div className="navbar-item-box">
            <Link
              className="navbar-item"
              href={`/${lang}/academicdictionary`}>
              {Routes.academic_dictionary}
            </Link>
          </div>
          <div className="navbar-item-box">
            <Link
              className="navbar-item"
              href={`/${lang}/performer`}>
              {Routes.performer}
            </Link>
          </div>
          <div className="navbar-item-box">
            <Link
              className="navbar-item"
              href={`/${lang}/blog/1`}>
              {Routes.blog}
            </Link>
          </div>
        </div>
        <LanguageSelect lang={lang} />
        <ContactsModal connect_with_us={Performer.connect_with_us} social_network={Routes.social_network} contact_info={Routes.contact_info} get_touch={Routes.get_touch} />
      </div>
    </>
  );
};

export default Navbar;
