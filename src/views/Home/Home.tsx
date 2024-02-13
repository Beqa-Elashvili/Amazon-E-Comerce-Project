import { useContext, useEffect, useState } from "react";
import { SHome } from "./Home.styled";
import { ThemeContext } from "@src/providers/ThemeProvider/ThemeContext";
import { BackSlider } from "../../components/HomeComponents/Slidder";
import { SaleProducts } from "@src/components/HomeComponents/Sale_Products";
import Products from "../Products";
import { useGetCartProducts } from "@src/hooks/useAddtoCart/getCartProducts";

export function Home() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <SHome>
      <div>
        <div className="relative">
          <BackSlider />
          <SaleProducts />
        </div>
        <div>
          <Products />
        </div>
      </div>
      <button onClick={() => toggleTheme()}>შეცვალე theme</button>
    </SHome>
  );
}
