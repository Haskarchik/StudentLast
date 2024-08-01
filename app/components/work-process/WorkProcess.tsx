// pages/work-process.tsx

import { GetServerSideProps } from "next";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import WorkProcessClient from "./WorkProcessClient";

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const { AboutUs } = await getDictionary(locale as Locale);

  return {
    props: {
      AboutUs,
    },
  };
};

export default function WorkProcess({
  AboutUs,
  lang,
  left,
}: {
  AboutUs: any;
  lang: Locale;
  left:boolean
}) {
  return <WorkProcessClient AboutUs={AboutUs} lang={lang} left={left} />;
}
