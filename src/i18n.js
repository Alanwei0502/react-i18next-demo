import { initReactI18next } from "react-i18next";
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import i18n from "i18next";

i18n
  .use(initReactI18next) // 將 i18n 向下傳遞給 react-i18next
  .use(LanguageDetector) // 用於檢測瀏覽器中的用戶語言
  .use(HttpApi) //  一個簡單的 i18next 後端，它將使用 XMLHttpRequest 或 fetch API 從後端服務器加載資源
  .init({
    supportedLngs: ['tw', 'en', 'ch', 'jp'],
    fallbackLng: "tw", // 預設語系
    detection: {
      order: ['path', 'cookie', 'htmlTag', 'localStorage', 'subdomain'], // 偵測瀏覽器語系順序
      caches: ['cookie'] // 儲存語系
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json' // 抓取多語系位置
    },
    // react: {
    //   useSuspense: false
    // },
    interpolation: {
      escapeValue: false // React已經免受於跨網站指令碼(XSS)
    }
  });

export default i18n;