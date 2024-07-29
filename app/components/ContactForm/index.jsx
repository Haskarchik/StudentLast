// components/ContactFormServer.jsx
import { getDictionary } from "@/lib/dictionary";
import ContactFormClient from "./ContactFormClient";

export const ContactFormServer = async ({ lang }) => {
  const { contactUs } = await getDictionary(lang);
  return <ContactFormClient contactUs={contactUs} lang={lang} />;
};

export default ContactFormServer;
