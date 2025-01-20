// i18n.ts

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import các tệp dịch
import common_en from '../../../../public/locales/en/common.json';
import common_vi from '../../../../public/locales/en/common.json';

i18n
  .use(LanguageDetector) // Tự động phát hiện ngôn ngữ
  .use(initReactI18next) // Kết nối với react-i18next
  .init({
    resources: {
      en: {
        common: common_en,
      },
      vi: {
        common: common_vi,
      },
    },
    fallbackLng: 'en',
    ns: ['common'],
    defaultNS: 'common',
    interpolation: {
      escapeValue: false, // Không cần escape vì React tự xử lý
    },
    react: {
      useSuspense: false, // Để tránh lỗi khi không sử dụng Suspense
    },
  });

export default i18n;
