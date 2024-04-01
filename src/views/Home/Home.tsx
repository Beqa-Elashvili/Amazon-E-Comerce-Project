import { useContext } from "react";
import { SHome } from "./Home.styled";
import { ThemeContext } from "@src/providers/ThemeProvider/ThemeContext";
import { BackSlider } from "../../components/HomeComponents/Slidder";
import { SaleProducts } from "@src/components/HomeComponents/Sale_Products";
import Products from "../ProductsPage";
import { ProductsSlider } from "@src/components/HomeComponents/ProductsSlider";
import { useGlobalProvider } from "@src/providers/GlobalProvider";

export function Home() {
  const { products } = useGlobalProvider();
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <SHome>
      <div>
        <div>
          <BackSlider />
          <SaleProducts />
        </div>
        <div className="flex items-center flex-col gap-14 justify-center">
          <div className="mt-52 shadow-xl bg-white p-2 bg-slate-700 rounded-xl">
            <ProductsSlider
              relativeProp={"relative"}
              imgHeight={225}
              itemsSHow={6}
              products={products}
            />
          </div>
          <Products />
        </div>
      </div>
      <button onClick={() => toggleTheme()}>შეცვალე theme</button>
    </SHome>
  );
}
