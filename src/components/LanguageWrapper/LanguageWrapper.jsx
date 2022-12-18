import React, { useState, useEffect } from 'react';
import { createContext } from "react";
import { IntlProvider } from "react-intl";
import russian from '../../lang/ru.json';
import english from '../../lang/en.json';

export const languages = {
  en: "en",
  ru: "ru",
};

export const LanguageContext = createContext({
  languages: languages
});

export function LanguageWrapper(props) {
  let localeInit;
  useEffect(() => {
    localeInit = navigator.locale;
  }, []);
  let langInit;
  if (localeInit==="en") {
    localeInit = english;
  } else if (localeInit === "ru") {
    localeInit = russian;
  }
  const [locale, setLocale] = useState(localeInit);
  const [messages, setMessages] = useState(langInit);

  function selectLanguage(e) {
    const newLocale = e.target.value;
    setLocale(newLocale);
    if (newLocale === 'en') {
      setMessages(english);
    } else if (newLocale === 'ru') {
        setMessages(russian);
    }
  }

  return (
    <LanguageContext.Provider value = {{locale, selectLanguage}}>
      <IntlProvider messages={messages} locale={locale}>
        {props.children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
}