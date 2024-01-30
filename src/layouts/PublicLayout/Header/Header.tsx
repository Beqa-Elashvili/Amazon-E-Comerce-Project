import { SHeader, Hbuttons } from "./Header.style";
import { FormattedMessage } from "react-intl";
import { Translate } from "./HeaderComponents/SelectLanguage";
import { useContext } from "react";
import { GlobalContext } from "@src/providers/GlobalProvider";
import { Category } from "./HeaderComponents/CategoryMenu";
import { useNavigate } from "react-router-dom";
import { UserAvatar } from "./HeaderComponents/UserAvatar";

export function Header() {
  const navigate = useNavigate();
  const { categorys } = useContext(GlobalContext);

  return (
    <div>
      <SHeader className="bg-gray-900">
        <button>
          <img
            src="./IMages/amazon logo.png"
            alt="amazon Logo"
            className="w-28 h-50 p-1"
          />
        </button>
        <button className="Deliver">
          <h5>
            <FormattedMessage id="Deliver-to" defaultMessage={"Deliver to"} />
          </h5>
          <h3>
            <img
              src="./Images/map cursor.png"
              alt="cursor"
              className="Map w-4 h-4 mr-0.5"
            />
            Los Angeles
          </h3>
        </button>
        <div className="Search-input">
          <select name="All" id="All">
            {categorys?.map((category) => {
              return (
                <option key={category.Id} value={category.category}>
                  {category.category}
                </option>
              );
            })}
          </select>
          <input className="ml-5" type="text" placeholder="Search Amazon" />
          <button className="input-btn">
            <img
              className=" w-5 h-5"
              src="./Images/search-icon.png"
              alt="search-icon"
            />
          </button>
        </div>
        <Translate />
        <UserAvatar />
        <Hbuttons>
          <button>
            <p>
              <FormattedMessage id="returns" defaultMessage={"returns"} />
            </p>
            <h4>
              <FormattedMessage id="Orders" defaultMessage={"Orders"} />
            </h4>
          </button>
          <button className="shop-button">
            <img
              className="shopping-cart-icon"
              src="./Images/shopping-cart-icon.png"
              alt="Shopping-cart-icon"
            />
            <h4>
              <FormattedMessage id="Cart" defaultMessage={"Cart"} />
            </h4>
          </button>
        </Hbuttons>
      </SHeader>
      <Category />
    </div>
  );
}
