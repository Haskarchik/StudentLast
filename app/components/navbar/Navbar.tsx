"use client";

import "./Navbar.scss";
import { Locale } from "@/i18n.config";
import Link from "next/link";
import { getDictionary } from "@/lib/dictionary";
import SetLanguage from "../setLanguage/SetLanguage";
import ContactsModal from "../contact-modal/ContactsModal";
import Image from "next/image";
import logo from "../../../public/logo.svg";

interface NavbarProps {
  lang: Locale;
}

const Navbar = async ({ lang }: NavbarProps) => {
  const { Routes, Performer } = await getDictionary(lang);

  const navLinks = [
    { href: `/${lang}`, label: Routes.main_page },
    { href: `/${lang}/aboutus`, label: Routes.aboutUs },
    { href: `/${lang}/services/1`, label: Routes.services },
    { href: `/${lang}/reviews/all/1`, label: Routes.reviews },
    { href: `/${lang}/performer`, label: Routes.performer },
    { href: `/${lang}/blog`, label: Routes.blog },
    { href: `/${lang}/contact`, label: Routes.contact },
  ];

  return (
    <div className="wrapper-navbar">
      <Link href={`/${lang}`} className="logo-navbar">
        <Image src={logo} width={200} height={50} alt="logo" />
      </Link>
      <NavLinks links={navLinks} />
      <SetLanguage lang={lang} />
      <ContactsModal
        connect_with_us={Performer.connect_with_us}
        social_network={Routes.social_network}
        contact_info={Routes.contact_info}
        get_touch={Routes.get_touch}
      />
    </div>
  );
};

const NavLinks = ({ links }: { links: { href: string; label: string }[] }) => (
  <div className="navbar-items">
    {links.map((link, index) => (
      <div key={index} className="navbar-item-box">
        <Link className="navbar-item" href={link.href}>
          {link.label}
        </Link>
      </div>
    ))}
  </div>
);

export default Navbar;
