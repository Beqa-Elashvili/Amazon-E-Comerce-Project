import { useGetCategorys } from "@src/hooks/useGetCategorys";
import { useEffect, useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Menu, Slider } from "antd";
import { useGetCategoryProducts } from "@src/hooks/useGetCategoryProducts";
import { SmenuImages } from "@src/hooks/useGetCategoryProducts/SglobalProducts";

export function CategoryMenu() {
  const [collapsed, setCollapsed] = useState(true);
  const { categorys } = useGetCategorys();
  const { CategoryName, getCategoryProducts } = useGetCategoryProducts();

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
        getCategoryProducts(item.name);
      }
    )
  );

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    if (collapsed === false) {
      setCollapsed(true);
    }
  }, [CategoryName]);

  return (
    <SmenuImages>
      <Button
        className="mb-2 mt-2 ml-2"
        type="primary"
        onClick={toggleCollapsed}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <div className="bg-gray-400 h-5/6 rounded-r-lg">
        <Menu
          className="object-cover bg-gray-400 rounded-r-lg"
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
          items={items}
        />
        {!collapsed && (
          <div className="px-2">
            <div className="bg-white p-2 rounded-xl">
              <div className="flex justify-between text-red-600">
                <p>MIN</p>
                <p>MAX</p>
              </div>
              <Slider range defaultValue={[20, 50]} />
            </div>
          </div>
        )}
      </div>
    </SmenuImages>
  );
}
