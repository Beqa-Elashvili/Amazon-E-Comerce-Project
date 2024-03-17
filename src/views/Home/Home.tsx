import { useContext } from "react";
import { SHome } from "./Home.styled";
import { ThemeContext } from "@src/providers/ThemeProvider/ThemeContext";
import { BackSlider } from "../../components/HomeComponents/Slidder";
import { SaleProducts } from "@src/components/HomeComponents/Sale_Products";
import Products from "../ProductsPage";
import { ProductsSlider } from "@src/components/HomeComponents/ProductsSlider";

export function Home() {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <SHome>
      <div>
        <div>
          <BackSlider />
          <SaleProducts />
        </div>
        <div className="flex flex-col gap-14 justify-center">
          <ProductsSlider />
          <Products />
        </div>
      </div>
      <button onClick={() => toggleTheme()}>შეცვალე theme</button>
    </SHome>
  );
}
