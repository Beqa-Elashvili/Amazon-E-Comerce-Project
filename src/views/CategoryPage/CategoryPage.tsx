import { useGetCategorys } from "@src/hooks/useGetCategorys";
import { useEffect, useState } from "react";
import { SglobalProducts } from "./SglobalProducts";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Menu } from "antd";
import { useGetCategoryProducts } from "@src/hooks/useGetCategoryProducts";

export function CategoryPage() {
  const { categorys } = useGetCategorys();
  const [collapsed, setCollapsed] = useState(true);
  const { CategoryName, setCategoryName } = useGetCategoryProducts();

  type MenuItem = Required<MenuProps>["items"][number];

  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
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

  const items: MenuItem[] | undefined = categorys?.map((item) =>
    getItem(
      item.name,
      item.id,
      <img src={item.image} alt="category_icon" />,
      undefined,
      undefined,
      () => {
        setCategoryName(item.name);
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
    <SglobalProducts>
      <div className="ml-2">
        <h1>products</h1>
        <p className="text-gray-800">
          Our most popular products based on sales. Updated frequently.
        </p>
      </div>
      <hr className="w-4/5 m-auto mt-2" />
      <div className="flex">
        <div className="w-60">
          <Button
            className="mb-2 mt-2 ml-2"
            type="primary"
            onClick={toggleCollapsed}
          >
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            Categorys
          </Button>
          <Menu
            mode="inline"
            theme="dark"
            inlineCollapsed={collapsed}
            items={items}
          />
        </div>
        <div className="mt-8 p-2">ggggds</div>
      </div>
    </SglobalProducts>
  );
}
