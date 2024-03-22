import { FooterLine } from "./FooterStyle";
import { Translate } from "@src/layouts/PublicLayout/Header/HeaderComponents/CompSelectLanguage";
export function AuthFooter(): JSX.Element {
  return (
    <FooterLine className="flex items-center relative justify-center flex-col text-sm font-sans">
      <div className="line mb-5 mt-5"></div>
      <div className="flex gap-7">
        <a
          className="no-underline hover:text-amber-600 hover:underline"
          href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_desktop_footer_cou?ie=UTF8&nodeId=508088"
        >
          Conditions of Use
        </a>
        <a
          className="no-underline hover:text-amber-600 hover:underline "
          href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_desktop_footer_privacy_notice?ie=UTF8&nodeId=468496"
        >
          Privacy Notice
        </a>
        <a
          className="no-underline hover:text-amber-600 hover:underline"
          href="https://www.amazon.com/gp/help/customer/display.html"
        >
          Help
        </a>
      </div>
      <p className="mt-2">© 1996-2024, Amazon.com, Inc. or its affiliates</p>
      <Translate />
    </FooterLine>
  );
}
