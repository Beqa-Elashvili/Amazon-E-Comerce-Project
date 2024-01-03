import { useState, PropsWithChildren, useCallback, useEffect } from "react";
import { IntlProvider } from "react-intl";
import { LocaleContext, Locale_Enum } from "./LocaleContext";

import en from "./Translations/en.json";
import ka from "./Translations/ka.json";

export function LocaleProvider({ children }: PropsWithChildren) {
  const [locale, setLocale] = useState<Locale_Enum>(Locale_Enum.EN);

  const languages = { en, ka };


  useEffect(() => {
if()
  },[])

  const toggleLocale = useCallback(() => {
    if (locale === Locale_Enum.KA) {
      setLocale(Locale_Enum.EN);
      localStorage.setItem("language", Locale_Enum.EN);
    } else if (locale === Locale_Enum.EN) {
      setLocale(Locale_Enum.KA);
      localStorage.setItem("language", Locale_Enum.KA);
    }
  }, [locale]);

  return (
    <LocaleContext.Provider value={{ locale, setLocale, toggleLocale }}>
      <IntlProvider
        messages={languages[locale]}
        locale={locale}
        defaultLocale="en"
      >
        {children}
      </IntlProvider>
    </LocaleContext.Provider>
  );
}
