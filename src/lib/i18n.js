import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          welcome: "Welcome to my website",
          language: "English"
        }
      },
      vi: {
        translation: {
          welcome: "Chào mừng bạn đến với trang web của tôi",
          language: "Tiếng Việt"
        }
      }
    },
    lng: 'en', // Ngôn ngữ mặc định
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
