// pages/about-us.tsx

import { GetServerSideProps } from "next";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import AboutUsComponent from "./AboutUsComponent";

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
   const { AboutUs } = await getDictionary(locale as Locale);

  return {
    props: {
      article: "Про нас",
    },
  };
};

export default function AboutUsPage({
  article,
  AboutUs,
}: {
  article: string;
  AboutUs: {
    description_1: string;
    years_in_industry: string;
    completed_works: string;
    regular_customers: string;
  };
}) {
  return <AboutUsComponent article={article} AboutUs={AboutUs} />;
}
