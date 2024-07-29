import React from "react";
import "./Page404.scss";
import { getDictionary } from "@/lib/dictionary";
import Link from "next/link";
import Button from "./components/button/Button";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Сторінку не знайдено',
  description: 'Вибачте, але сторінку не знайдено. Будь ласка, перевірте URL або поверніться на головну сторінку.',
  robots: 'noindex, nofollow',
};

const Page404 = async({isHederAndFooter=true}) => {
  const {Page404,Routes}=await getDictionary("ua")

  const pages = [
    {
      id: 1,
      path: "",
      name: Routes.main_page,
    },
    {
      id: 2,
      path: "/aboutus",
      name: Routes.aboutUs,
    },
    {
      id: 3,
      path: "/services/1",
      name: Routes.services,
    },
    {
      id: 4,
      path: "/reviews/all/1",
      name: Routes.reviews,
    },
    {
      id: 5,
      path: "/performer",
      name: Routes.performer,
    },
  ];
  return (
        <div className={isHederAndFooter?"root":""}>
          {isHederAndFooter?
            <Navbar lang={"ua"}/>
            :
            <></>}
          <div className="wrapper-page404">
            <h1>{Page404.title}</h1>
            <div className="description">{Page404.description}</div>
            <div className="list-pages">
              {pages.map((page) => (
                <Link key={page.id} href={'/ua'+page.path}>
                  <Button
                    text={page.name}
                  />
                </Link>
              ))}
            </div>
            
            {isHederAndFooter?
              <Footer lang="ua" />
              :
              <></>}
          </div>
        </div>
  );
};

export default Page404;
