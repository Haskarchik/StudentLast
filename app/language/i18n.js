import en from "../../dictionaries/en.json";
import ua from "../../dictionaries/ua.json";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // i18next для React
  .init({
    resources: {
      en: {
        translation: en, // ваші переклади
      },
      ua: {
        translation: ua, // ваші переклади
      },
    },
    lng: "ua", // мова за замовчуванням
    fallbackLng: "ua",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
