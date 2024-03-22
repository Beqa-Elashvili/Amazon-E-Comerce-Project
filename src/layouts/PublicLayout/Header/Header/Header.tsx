import { SHeader, Hbuttons } from "./Header.style";
import { FormattedMessage } from "react-intl";
import { Translate } from "../HeaderComponents/CompSelectLanguage";
import { useGlobalProvider } from "@src/providers/GlobalProvider";
import { CategoryButtons } from "../HeaderComponents/CompCategory/CategoryMenu";
import { UserAvatar } from "../HeaderComponents/CompUserAvatar/UserAvatar";
import { SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetSearchResult } from "@src/hooks/useGetSearchResult";
import { useCartCount } from "@src/hooks/useCartCount";

export function Header() {
  const navigate = useNavigate();
  const { categorys } = useGlobalProvider();
  const { ProductsCount } = useCartCount();
  const [show, setshow] = useState<boolean>(false);
  const { categorySearch, setCategorySearch, setSearch, search, searchResult } =
    useGetSearchResult();

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
  function handleSelectValue(event: {
    target: { value: SetStateAction<string> };
  }) {
    setCategorySearch(event?.target.value);
  }

  return (
    <div>
      <SHeader className="bg-gray-900">
        <button className="p-1" onClick={() => navigate("/")}>
          <img
            src="/IMages/amazon logo.png"
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
              src="/Images/map cursor.png"
              alt="cursor"
              className="Map w-4 h-4 mr-0.5"
            />
            Los Angeles
          </h3>
        </button>
        <div className="relative flex items-center">
          <select
            value={categorySearch}
            onChange={handleSelectValue}
            className="absolute ml-5"
            name="SelectCategory"
            id="all"
          >
            <option value="All">All</option>
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
            className="absolute max-h-80 top-12 left-40 bg-red-50 p-4 z-10 rounded-lg w-96 overflow-y-auto"
          >
            {searchResult?.map((item) => {
              return (
                <div key={item.id} className="flex gap-2 py-1">
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
              src="/Images/search-icon.png"
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
          <div className="relative">
            <button
              onClick={() => navigate("/cartProducts")}
              className="shop-button"
            >
              <img
                className="shopping-cart-icon"
                src="/Images/shopping-cart-icon.png"
                alt="Shopping-cart-icon"
              />
              <h4>
                <FormattedMessage id="Cart" defaultMessage={"Cart"} />
              </h4>
            </button>
            <div className="absolute top-1 right-2 text-white border-solid border-amber-500 rounded-full h-6 min-w-6 text-center">
              {ProductsCount}
            </div>
          </div>
        </Hbuttons>
      </SHeader>
      <CategoryButtons />
    </div>
  );
}
