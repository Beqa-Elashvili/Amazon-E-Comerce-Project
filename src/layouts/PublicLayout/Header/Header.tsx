import React from "react";
import { SHeader, Hbuttons } from "./Header.style";
import { FormattedMessage, useIntl } from "react-intl";
import { Translate } from "./SelectLanguage";
export function Header() {
  return (
    <SHeader className="bg-gray-900">
      <button>
        ,
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
        <input type="text" placeholder="Search Amazon" />
        <button className="input-btn">
          <img
            className=" w-5 h-5"
            src="./Images/search-icon.png"
            alt="search-icon"
          />
        </button>
      </div>
      <Translate />
      <Hbuttons>
        <button>
          <p>
            <FormattedMessage
              id="Hello,sign in"
              defaultMessage={"Hello, Sign in"}
            />
          </p>
          <h4>
            <FormattedMessage id="Account-&-Lists"/>
          </h4>
        </button>
        <button>
          <p>
            <FormattedMessage id="returns" />
          </p>
          <h4>
            <FormattedMessage id="Orders"/>
          </h4>
        </button>
        <button className="shop-button">
          <img
            className="shopping-cart-icon"
            src="./Images/shopping-cart-icon.png"
            alt="Shopping-cart-icon"
          />
          <h4>
            <FormattedMessage id="Cart"/>
          </h4>
        </button>
      </Hbuttons>
    </SHeader>
  );
}
