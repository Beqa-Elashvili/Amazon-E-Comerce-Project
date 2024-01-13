import { SFooter } from "./Footer.style";
import { useContext } from "react";
import { GlobalContext } from "@src/providers/GlobalProvider";

export function Footer() {
  const { footerLinks } = useContext(GlobalContext);

  return (
    <div>
      <SFooter className="bg-gray-900">
        <div className="links-title flex">
          <h3>Get to Know Us</h3>
          <h3>Make Money with Us</h3>
          <h3>Amazon Payment Products</h3>
          <h3>Let Us Help You</h3>
        </div>
        <div>
          <div className=" links">
            {footerLinks.map((link, id) => (
              <div key={id} className="links-grid">
                <a key={id} href={link.Carrer} className="grid-item">
                  {link.Name}
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="line mt-10"></div>
        <div>1234</div>
      </SFooter>
    </div>
  );
}

export default Footer;
