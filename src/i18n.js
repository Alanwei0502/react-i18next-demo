import { initReactI18next } from "react-i18next";
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import i18n from "i18next";

i18n
  .use(initReactI18next) // 將 i18n 向下傳遞給 react-i18next
  .use(LanguageDetector) // 用於偵測瀏覽器中的用戶語言
  .use(HttpBackend) //  能夠讓多語系檔透過 XMLHttpRequest 或 the fetch API 來載入
  .init({
    supportedLngs: ['zh_TW', 'en_US', 'zh_CN', 'ja_JP'], // 支持語言種類
    fallbackLng: "en_US", // 當目前的語言檔找不到對應的字詞時，會用 fallbackLng (en_US) 作為預設語言
    detection: {
      order: ['path', 'cookie', 'htmlTag', 'localStorage', 'subdomain'], // 偵測瀏覽器語系順序
      caches: ['cookie'] // 儲存語系
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}.json' // 網頁載入時去下載語言檔的位置
    },
    interpolation: { // 是否要讓字詞 escaped 來防止 xss 攻擊，這裡因為 React.js 已經做了，就設成 false即可
      escapeValue: false // 如果語系檔中有巢狀的結構，則 escapeValue 要設為 false，這樣就可以透過物件的方式來取得巢狀內的翻譯
    }
    //resource, // 引入字典檔（以 json 格式撰寫），這裡因為有backend抓取語言檔，所以不需要寫
    // react: {
    //   useSuspense: false
    // },
  });

export default i18n;