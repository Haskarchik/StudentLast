import { Locale, i18n } from "@/i18n.config";
import { Inter } from "next/font/google";
import "../App.scss";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { BlogProvider } from "./blog/BlogContext";
import React from "react";
import CookieAlert from "../components/CookieAlert/page";
import { getDictionary } from "@/lib/dictionary";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  params: { lang: Locale };
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}


const RootLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) => {
  const language = params.lang === "ua" ? "uk" : "ru";
  const { CookieAlertText } = await getDictionary(params.lang);

  return (
    <html lang={language}>
      <body className={inter.className}>
        <div className="root">
          <header>
            <Navbar lang={params.lang} />
          </header>
          <main>
            <div className="routes">
              <div className="routes scroll-container">
                <BlogProvider>{children}</BlogProvider>
              </div>
            </div>
          </main>
          <footer>
            <Footer lang={params.lang} />
          </footer>
        </div>
        <CookieAlert info={CookieAlertText} />
      </body>
    </html>
  );
};

export default React.memo(RootLayout);
