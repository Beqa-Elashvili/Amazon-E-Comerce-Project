import { useGetCategorys } from "@src/hooks/useGetCategorys";
import { useState } from "react";
import type { MenuProps } from "antd";
import { Button, Menu } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { SglobalProducts } from "./SglobalProducts";

export function CategoryPage() {
  const { categorys } = useGetCategorys();
  const [collapsed, setCollapsed] = useState(true);

  type MenuItem = Required<MenuProps>["items"][number];

  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: "group",
    onClick?: () => void
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      type,
      onClick,
    } as MenuItem;
  }

  const items: MenuItem[] = categorys?.map((category) => {
    return getItem(
      category.name,
      category.id.toString(),
      category.icon,
      undefined,
      undefined,
      () => {
        console.log(category.name);
      }
    );
  });

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

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
            className="mb-2 mt-2"
            type="primary"
            onClick={toggleCollapsed}
          >
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            Categorys
          </Button>
          <Menu
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
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
