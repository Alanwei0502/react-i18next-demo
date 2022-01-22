
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import cookies from 'js-cookie';
import ClassComponent from "./components/ClassComponent";
import HocClassComponent from "./components/HocClassComponent";
import flagIcons from "./assets";
import './App.css'

function App() {
  const lang = cookies.get('i18next') || 'zh-TW';

  // Functional Component 透過 Translation（hoc） 或是 useTranslation (hook) 來達成多語系切換的功能
  const { t, i18n } = useTranslation();

  // 使用 i18n.changeLanguage 函數來切換當前語系檔
  const onChangeLang = e => i18n.changeLanguage(e.target.attributes.data.value);

  useEffect(() => {
    document.title = t('app_title');
  }, [lang, t]);

  return (
    <div>
      <div className="flag">
        {flagIcons.map(({ src, code, alt }) => (
          <img src={src} alt={alt} width={100} key={code} data={code} onClick={onChangeLang} />
        ))}
      </div>
      <h1>{t('app_component_t.welcome_to_react')}</h1>
      <p>{t('app_component_t.introduction')}</p>
      <p>{t('app_component_t.current_language', { lang })}</p>
      <hr />
      <ClassComponent />
      <hr />
      <HocClassComponent />
    </div>
  );
}

export default App;
