import { SHeader, Hbuttons } from "./Header.style";
import { FormattedMessage } from "react-intl";
import { Translate } from "../HeaderComponents/CompSelectLanguage";
import { useGlobalProvider } from "@src/providers/GlobalProvider";
import { CategoryButtons } from "../HeaderComponents/CompCategory/CategoryMenu";
import { UserAvatar } from "../HeaderComponents/CompUserAvatar/UserAvatar";
import { SetStateAction, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LocationDeliverModal } from "@src/components/LocationDeliverModal";
import { useGetSearchResult } from "@src/hooks/useGetSeacthResultFetch/useGetSearchResult";
import { FaArrowUp } from "react-icons/fa";
import {
  TCategorys,
  TProducts,
} from "@src/providers/GlobalProvider/GlobalContext";
import { Input } from "antd";

export function Header() {
  const [search, setSearch] = useState<string>("");
  const { GetSearchResult, SearchResults } = useGetSearchResult();
  const [categorySearch, setCategorySearch] = useState<string>("All");
  const { categorys, ProductsCount, setOpenLocationModal, location, zipCode } =
    useGlobalProvider();
  const [show, setshow] = useState<boolean>(false);
  const [showRespInput, setshowRespInput] = useState<boolean>(false);

  const navigate = useNavigate();

  const hanldeSearchValue = (
    categorySearch: string,
    search: string,
    page: number
  ) => {
    navigate(`/Category_Products_Page/${categorySearch}/${search}/${page}`);
    setSearch("");
    setshow(false);
    setshowRespInput(false);
  };

  useEffect(() => {
    let timer: number;
    const delayedFilterPrice = () => {
      timer = setTimeout(() => {
        GetSearchResult(categorySearch, `productName=${search}`);
      }, 500);
    };
    delayedFilterPrice();
    return () => clearTimeout(timer);
  }, [search, categorySearch]);

  const handleInputChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSearch(event.target.value);
    if (event.target.value === "") {
      setshow(false);
    } else {
      setshow(true);
    }
  };
  const handleSelectValue = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setCategorySearch(event?.target.value);
  };

  const handleProducts = (id: string, category: string) => {
    navigate(`/OneProductPage/${category}/${id}`);
    setSearch("");
    setshow(false);
    setshowRespInput(false);
  };
  const removeInput = () => {
    setshow(false);
    setshowRespInput(false);
  };

  const handleKeyDown = (event: { key: string }) => {
    if (event.key === "Enter") {
      if (SearchResults?.length !== 0) {
        hanldeSearchValue(categorySearch, `productName=${search}`, 1);
      }
    }
  };

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
        <div className="hidden lg:block">
          <button
            onClick={() => setOpenLocationModal(true)}
            className="Deliver ml-1 "
          >
            <h5>
              <FormattedMessage id="Deliver-to" defaultMessage={"Deliver to"} />
            </h5>
            <h3 className="flex">
              <img
                src="/Images/map cursor.png"
                alt="cursor"
                className="Map w-4 h-4 mr-0.5"
              />
              <p>{location.slice(0, 6)}...</p>
              <p>{zipCode}</p>
            </h3>
            <LocationDeliverModal />
          </button>
        </div>

        <div className="block lg:hidden">
          <button
            onClick={() => setshowRespInput(true)}
            className="ml-2 resp-serch-btn"
          >
            <img
              className="h-5"
              src="/Images/search-icon.png"
              alt="search-icon"
            />
          </button>
        </div>
        <div className="w-full hidden lg:block">
          <div className="w-full relative flex items-center">
            <select
              value={categorySearch}
              onChange={handleSelectValue}
              className="absolute z-10 ml-5 hidden lg:block "
              name="SelectCategory"
              id="all"
              style={{ width: "auto" }}
            >
              <option value="All">All</option>
              {categorys?.map((category: TCategorys) => {
                return (
                  <option key={category.id} value={category.name}>
                    {category.name}
                  </option>
                );
              })}
            </select>
            <Input
              onKeyDown={handleKeyDown}
              value={search}
              onChange={handleInputChange}
              className="ml-5 hidden lg:block"
              type="text"
              placeholder="Search Amazon"
            />
            <div
              style={{ display: show ? "block" : "none" }}
              className="absolute max-h-80 top-12 left-40 bg-red-50 p-4 z-10 rounded-lg w-96 overflow-y-auto"
            >
              {SearchResults?.map((item: TProducts) => {
                const titles = item.title.split(" ").slice(0, 6).join(" ");
                return (
                  <div
                    key={item.id}
                    onClick={() => handleProducts(item.category_name, item.id)}
                    className=" flex gap-2 py-1 cursor-pointer"
                  >
                    <img
                      className="h-12 w-10 object-contain rounded-xl hover:shadow"
                      src={item.image}
                      alt="product-image"
                    />
                    <div>
                      <p>{titles}</p>
                      {item.salePrice !== null ? (
                        <h6 className="text-red-600">
                          price: {item.salePrice}$
                        </h6>
                      ) : (
                        <h6>price: {item.price}$</h6>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            <button
              onClick={() =>
                hanldeSearchValue(categorySearch, `productName=${search}`, 1)
              }
              className="input-btn hidden lg:block"
            >
              <img
                className=" w-5 h-5"
                src="/Images/search-icon.png"
                alt="search-icon"
              />
            </button>
          </div>
        </div>
        <div
          className={`z-10  resp-input ${showRespInput ? "show" : ""} relative`}
        >
          <div className="relative block lg:hidden flex items-center">
            <select
              value={categorySearch}
              onChange={handleSelectValue}
              className="absolute z-10"
              style={{ height: 62, borderRadius: 0 }}
              name="SelectCategory"
              id="all"
            >
              <option value="All">All</option>
              {categorys?.map((category: TCategorys) => {
                return (
                  <option key={category.id} value={category.name}>
                    {category.name}
                  </option>
                );
              })}
            </select>
            <Input
              onKeyDown={handleKeyDown}
              value={search}
              onChange={handleInputChange}
              className="ml-5 h-[62px]"
              style={{ borderRadius: 0 }}
              type="text"
              placeholder="Search Amazon"
            />
            <div
              style={{ display: show ? "block" : "none" }}
              className="absolute w-3/4 max-h-80 top-12 left-20 bg-red-50 p-4 z-10 rounded-lg overflow-y-auto"
            >
              {SearchResults?.map((item: TProducts) => {
                return (
                  <div
                    key={item.id}
                    onClick={() => handleProducts(item.category_name, item.id)}
                    className="flex gap-2 py-1 cursor-pointer"
                  >
                    <img
                      className="h-12 w-10 object-contain rounded-xl hover:shadow"
                      src={item.image}
                      alt="product-image"
                    />
                    <div>
                      <p>{item.title.slice(0, 20)}</p>
                      {item.salePrice !== null ? (
                        <h6 className="text-red-600">
                          price: {item.salePrice}$
                        </h6>
                      ) : (
                        <h6>price: {item.price}$</h6>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            <button
              className="z-10 absolute right-14 cursor-pointer "
              style={{ backgroundColor: "white" }}
              onClick={removeInput}
            >
              <FaArrowUp className="bg-white size-6 text-slate-200" />
            </button>
            <button
              onClick={() =>
                hanldeSearchValue(categorySearch, `productName=${search}`, 1)
              }
              className="input-btn absolute h-[62px]"
              style={{ borderRadius: 0 }}
            >
              <img
                className=" w-5 h-5"
                src="/Images/search-icon.png"
                alt="search-icon"
              />
            </button>
          </div>
        </div>
        <Translate />
        <UserAvatar />
        <Hbuttons>
          <div className="hidden lg:block min-w-24">
            <button onClick={() => navigate("/OrdersPage")}>
              <p>
                <FormattedMessage id="returns" defaultMessage={"returns"} />
              </p>
              <h4>
                <FormattedMessage id="Orders" defaultMessage={"Orders"} />
              </h4>
            </button>
          </div>
          <div className="relative hidden lg:block">
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
          <div className="block lg:hidden">
            <button
              onClick={() => navigate("/cartProducts")}
              className="shop-button"
            >
              <img
                className="shopping-cart-icon"
                src="/Images/shopping-cart-icon.png"
                alt="Shopping-cart-icon"
              />
            </button>
          </div>
        </Hbuttons>
      </SHeader>
      <CategoryButtons />
    </div>
  );
}
