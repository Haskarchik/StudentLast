import i18next from 'i18next';
import en from '../../dictionaries/en.json'
import ua from '../../dictionaries/ua.json'
i18next.init({
  lng: 'en', // if you're using a language detector, do not define the lng option
  debug: true,
  resources: {
    en: {
      translation: {
        en
      }
    },ua: {
        translation: {
          ua
        }
      }
  }
});
// initialized and ready to go!
// i18next is already initialized, because the translation resources where passed via init function
document.getElementById('output').innerHTML = i18next.t('key');