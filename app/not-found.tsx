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
                <Link key={'linktoBack'} href={'/ua'}>
                  <Button
                    text={'Повернутися назад'}
                  />
                </Link>
            
            </div>
          </div>
            
            {isHederAndFooter?
              <Footer lang="ua" />
              :
              <></>}
        </div>
  );
};

export default Page404;
