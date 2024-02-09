import { useContext, useEffect, useState } from "react";
import { SHome } from "./Home.styled";
import { ThemeContext } from "@src/providers/ThemeProvider/ThemeContext";
import { BackSlider } from "../../components/HomeComponents/Slidder";
import { useGlobalProvider } from "@src/providers/GlobalProvider";
import { BaseAxios } from "@src/utils/Base_Axios";
import { SaleProducts } from "@src/components/HomeComponents/Sale_Products";
import Products from "../Products";
import { ProductSlider } from "@src/components/HomeComponents/ProductSlider";
import { getCartProducts } from "@src/hooks/useAddinCart/getCartProducts";

export function Home() {
  const { toggleTheme } = useContext(ThemeContext);
  const { setCategorys } = useGlobalProvider();
  const { cartProducts } = getCartProducts();
  // console.log(cartProducts);

  async function getCategory() {
    try {
      const resp = await BaseAxios.get("/product-category");
      setCategorys(resp.data);
    } catch (error) {
      console.error("Category fetch error", error);
    }
  }

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <SHome>
      <div>
        <div className="relative">
          <BackSlider />
          <SaleProducts />
        </div>
        {cartProducts?.map((item) => {
          return <div key={item.id}>{item.cartProduct.title}</div>;
        })}
        <div>
          <Products />
          <ProductSlider />
        </div>
      </div>
      <button onClick={() => toggleTheme()}>შეცვალე theme</button>
    </SHome>
  );
}
