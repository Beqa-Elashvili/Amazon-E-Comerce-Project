import { SFooter } from "./Footer.style";
import { useContext } from "react";
import { GlobalContext } from "@src/providers/GlobalProvider";

export function Footer() {
  const { footerLinks } = useContext(GlobalContext);

  return (
    <div>
      <SFooter className="bg-gray-900">
        <div>
          <div className="links">
            {footerLinks.map((link, id) => (
              <div key={id}>
                {link.Name === "Get to Know Us" ||
                link.Name === "Make Money with Us" ||
                link.Name === "Amazon Payment Products" ||
                link.Name === "Let Us Help You" ? (
                  <h3>{link.Name}</h3>
                ) : (
                  <a key={id} href={link.Destination} className="grid-item">
                    {link.Name}
                  </a>
                )}
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
