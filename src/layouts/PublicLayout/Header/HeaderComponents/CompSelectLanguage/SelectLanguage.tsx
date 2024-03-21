import { useContext } from "react";
import { LocaleContext } from "@src/providers/LocaleProvaider/LocaleContext";
import { SSelectLanguage } from "./SSelectLanguage";

export function Translate() {
  const { locale, toggleLocale } = useContext(LocaleContext);

  function Changelocale() {
    toggleLocale();
  }

  return (
    <SSelectLanguage>
      <button className="lang-btn h-14" onClick={Changelocale}>
        {locale === "en" ? (
          <>
            <img className="w-8 h-5" src="/Images/American-flag.png" alt="" />
            <span>EN</span>
          </>
        ) : (
          <>
            <img className="w-8 h-7" src="/Images/Georgia-flag.png" alt="" />
            <span>KA</span>
          </>
        )}
      </button>
    </SSelectLanguage>
  );
}
