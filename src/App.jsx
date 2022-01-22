
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import cookies from 'js-cookie';
import flagIcons from "./assets";
import './App.css'

function App() {
  const lang = cookies.get('i18next') || 'tw';
  const { t } = useTranslation();

  const onChangeLang = e => i18next.changeLanguage(e.target.attributes.data.value)

  useEffect(() => {
    document.title = t('app_title');
  }, [lang]);

  return (
    <div>
      <div className="flag">
        {flagIcons.map(({ src, code, alt }) => (
          <img src={src} alt={alt} width={100} key={code} data={code} onClick={onChangeLang} />
        ))}
      </div>
      <h1>{t('welcome_to_react')}</h1>
      <p>{t('introduction')}</p>
      <p>{t('current_language', { lang })}</p>
      <span className="flag-icon flag-icon-gb"></span>
    </div>
  );
}

export default App;
