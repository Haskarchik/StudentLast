// components/LetsWorkTogetherServer.jsx
import { getDictionary } from "@/lib/dictionary";
import LetsWorkTogetherClient from "./LetsWorkTogetherClient";

export const LetsWorkTogetherServer = async ({ lang }) => {
  const { workTogether } = await getDictionary(lang);
  return <LetsWorkTogetherClient lang={lang} contactUs={workTogether} />;
};

export default LetsWorkTogetherServer;
