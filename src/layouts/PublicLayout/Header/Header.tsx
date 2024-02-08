import { SHeader, Hbuttons } from "./Header.style";
import { FormattedMessage } from "react-intl";
import { Translate } from "./HeaderComponents/CompSelectLanguage/SelectLanguage";
import { useGlobalProvider } from "@src/providers/GlobalProvider";
import { CategoryButtons } from "./HeaderComponents/CompCategory/CategoryMenu";

import { UserAvatar } from "./HeaderComponents/CompUserAvatar/UserAvatar";
import { SetStateAction, useEffect, useState } from "react";
import { TProducts } from "@src/providers/GlobalProvider/GlobalContext";

export function Header() {
  const { categorys, products } = useGlobalProvider();
  const [searchResult, setSearchResult] = useState<TProducts[]>();
  const [search, setSearch] = useState("");
  const [show, setshow] = useState<boolean>(false);

  function handleInputChange(event: {
    target: { value: SetStateAction<string> };
  }) {
    setSearch(event.target.value);
    if (event.target.value === "") {
      setshow(false);
    } else {
      setshow(true);
    }
  }

  function SearchProducts() {
    const filteredProducts = products?.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    return filteredProducts;
  }

  useEffect(() => {
    const filteredProducts = SearchProducts();
    setSearchResult(filteredProducts);
  }, [search]);

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
        <button className="Deliver ml-1">
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
        <div className="relative flex items-center">
          <select className="absolute ml-5" name="SelectCategory" id="all">
            {categorys?.map((category) => {
              return (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              );
            })}
          </select>
          <input
            value={search}
            onChange={handleInputChange}
            className="ml-5"
            type="text"
            placeholder="Search Amazon"
          />

          <div
            style={{ display: show ? "block" : "none" }}
            className="absolute max-h-80 top-16 left-40 bg-red-50 p-4 z-10 rounded-lg w-96 overflow-y-auto"
          >
            {searchResult?.map((item) => {
              return (
                <div className="flex gap-2 py-1">
                  <img
                    className="h-12 w-10"
                    src={item.image}
                    alt="product-image"
                  />
                  <div>
                    <p>{item.title}</p>
                    <h6>price: {item.price}$</h6>
                  </div>
                </div>
              );
            })}
          </div>
          <button className="input-btn absolute">
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
      <CategoryButtons />
    </div>
  );
}
