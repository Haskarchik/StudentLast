"use client";

import "./Navbar.scss";
import { Locale } from "@/i18n.config";
import Link from "next/link";
import { getDictionary } from "@/lib/dictionary";
import SetLanguage from "../setLanguage/SetLanguage";
import ContactsModal from "../contact-modal/ContactsModal";
import Image from "next/image";
import logo from "../../../public/logo.svg";
import { useEffect, useState } from "react";

interface NavbarProps {
  lang: Locale;
}

const Navbar = ({ lang }: NavbarProps) => {
  const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined);
  const [routes, setRoutes] = useState<any>(null);
  const [performer, setPerformer] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const { Routes, Performer } = await getDictionary(lang);
      setRoutes(Routes);
      setPerformer(Performer);
    };
    fetchData();
  }, [lang]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
      const updateWidth = () => setWindowWidth(window.innerWidth);
      window.addEventListener('resize', updateWidth);
      return () => window.removeEventListener('resize', updateWidth);
    }
  }, []);

  if (!routes || !performer) {
    return null; // Повертаємо null, поки дані не завантажаться
  }

  const navLinks = [
    { href: `/${lang}`, label: routes.main_page },
    { href: `/${lang}/aboutus`, label: routes.aboutUs },
    { href: `/${lang}/services/1`, label: routes.services },
    { href: `/${lang}/reviews/all/1`, label: routes.reviews },
    { href: `/${lang}/performer`, label: routes.performer },
    { href: `/${lang}/blog`, label: routes.blog },
    { href: `/${lang}/contact`, label: routes.contact },
  ];

  return (
    <div className="wrapper-navbar">
      <div className="navbar_row">
      <Link href={`/${lang}`} className="logo-navbar">
        <Image src={logo} width={200} height={50} alt="logo" />
      </Link>
      {windowWidth && windowWidth < 1200 ? <SetLanguage lang={lang} /> : ''}
      </div> <NavLinks links={navLinks} />
      {windowWidth && windowWidth >= 1200 ? <SetLanguage lang={lang} /> : ''}
      <ContactsModal
        connect_with_us={performer.connect_with_us}
        social_network={routes.social_network}
        contact_info={routes.contact_info}
        get_touch={routes.get_touch}
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
