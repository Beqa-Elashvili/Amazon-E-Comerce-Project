import { SetStateAction, useEffect, useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Menu, Slider } from "antd";
import { SmenuImages } from "./SglobalProducts";
import { useGlobalProvider } from "@src/providers/GlobalProvider";
import { usePriceFilter } from "@src/hooks/usePriceFilter";
import { useNavigate, useParams } from "react-router-dom";

export function CategoryMenu() {
  const { categorys, collapsed, setCollapsed } = useGlobalProvider();
  const { sliderValue, setSliderValue } = usePriceFilter();
  const { categoryName } = useParams();
  const navigate = useNavigate();

  type MenuItem = Required<MenuProps>["items"][number];

  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode | undefined,
    name?: string,
    id?: string,
    onClick?: () => void
  ): MenuItem {
    return {
      key,
      name,
      id,
      icon,
      label,
      onClick,
    } as MenuItem;
  }
  const handleCategory = (
    categoryName: string,
    productsName: string,
    page: number
  ) => {
    navigate(`/Category_Products_Page/${categoryName}/${productsName}/${page}`);
  };

  const items: MenuItem[] = categorys?.map((item) =>
    getItem(
      item.name,
      item.id,
      typeof item.image === "string" ? (
        <img src={item.image} alt="category_icon" />
      ) : null,
      undefined,
      undefined,
      () => {
        handleCategory(item.name, "productName", 1);
      }
    )
  );

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    if (collapsed === false) {
      setCollapsed(true);
      console.log("fddf");
    }
  }, [categoryName]);

  const handleSliderChange = (value: SetStateAction<number[]>) => {
    setSliderValue(value);
  };

  return (
    <SmenuImages>
      <Button
        className="mb-2 mt-2 ml-2"
        type="primary"
        onClick={toggleCollapsed}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <div className="bg-gray-400 h-auto min-h-96 rounded-r-lg">
        <Menu
          className="object-cover bg-gray-400 rounded-r-lg"
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
          items={items}
        />
        {!collapsed && (
          <div className="px-2">
            <div className="bg-white p-2 rounded-xl mt-2">
              <div className="flex justify-between text-red-600">
                <p>MIN</p>
                <p>MAX</p>
              </div>
              <Slider
                min={0}
                max={5000}
                onChange={handleSliderChange}
                range
                defaultValue={[200, 4000]}
              />
            </div>
            <div className="flex items-center justify-between text-center p-2">
              <div className="border-solid bg-white border-orange-500  rounded-md border py-2 px-2 w-20">
                {sliderValue[0]} $
              </div>
              <div className="border-solid bg-white border-orange-500 rounded-md border py-2 px-2 w-20">
                {sliderValue[1]} $
              </div>
            </div>
          </div>
        )}
      </div>
    </SmenuImages>
  );
}
