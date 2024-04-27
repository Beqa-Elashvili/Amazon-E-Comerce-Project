import { SFooter } from "./Footer.style";
import { useGlobalProvider } from "@src/providers/GlobalProvider";
import { Translate } from "../Header/HeaderComponents/CompSelectLanguage";
import { TFooterLInks } from "@src/providers/GlobalProvider/GlobalContext";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "@src/providers/ThemeProvider/ThemeContext";
import { TbArrowsExchange2 } from "react-icons/tb";
export function Footer() {
  const { footerLinks, FooterLinksTwo } = useGlobalProvider();
  const { toggleTheme } = useContext(ThemeContext);
  const [isRotated, setIsRotated] = useState(false);

  const toggles = () => {
    toggleTheme();
    setIsRotated(!isRotated);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    if (!isRotated) {
      setIsRotated(true);
    }
  }, [isRotated]);
  return (
    <SFooter>
      <div className="FooterBackgroundOne">
        <div
          onClick={scrollToTop}
          className="bg-gray-700 hover:bg-gray-600 cursor-pointer p-4 w-full  text-center"
        >
          Back to top
        </div>
        <div className="hidden lg:grid w-4/6 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-14 gap-y-2">
          {footerLinks.map((link: TFooterLInks) => (
            <div key={link.id}>
              {link.Name === "Get to Know Us" ||
              link.Name === "Make Money with Us" ||
              link.Name === "Amazon Payment Products" ||
              link.Name === "Let Us Help You" ? (
                <h3 className="w-60">{link.Name}</h3>
              ) : (
                <a
                  key={link.id}
                  href={link.Destination}
                  className="grid-item text-gray-400"
                >
                  {link.Name}
                </a>
              )}
            </div>
          ))}
        </div>
        <div className="line"></div>
        <div className="flex items-center my-8 gap-2">
          <img className="h-6" src="\Images\amazon logo.png" alt="" />
          <Translate />
          <button className="lang-btn" onClick={toggles}>
            Change theme
            <span className="border-solid flex items-center ml-2 border rounded-full">
              <TbArrowsExchange2
                className={`size-6 text-orange-400 ${
                  isRotated ? "rotated" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>
      <div className="py-12 w-full bg-gray-900 ">
        <div className=" w-4/6 m-auto  grid text-center grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7  justify-center gap-x-7 gap-y-2">
          {FooterLinksTwo.map((item: TFooterLInks) => {
            return (
              <div
                className="text-start w-3/4 hover:underline hover:cursor-pointer"
                key={item.id}
              >
                <p className="text-xs">{item.Name}</p>
                <p className="text-xs text-gray-400">{item.Destination}</p>
              </div>
            );
          })}
        </div>
        <div className="underLInks">
          <div className="links">
            <p>Conditions of Use</p>
            <p>Privacy Notice</p>
            <p>Consumer Health Data Privacy Disclosure</p>
            <p>Your Ads Privacy Choices</p>
          </div>
          <p className="mt-2">
            © 1996-2024, Amazon.com, Inc. or its affiliates
          </p>
        </div>
      </div>
    </SFooter>
  );
}

export default Footer;
