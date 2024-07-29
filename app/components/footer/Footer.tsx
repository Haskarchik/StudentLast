import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/i18n.config";
import FooterClient from "./FooterClient";

const FooterServer = async ({ lang }: { lang: Locale }) => {
  const { Routes, Performer } = await getDictionary(lang);

  return <FooterClient lang={lang} Routes={Routes} Performer={Performer} />;
};

export default FooterServer;
