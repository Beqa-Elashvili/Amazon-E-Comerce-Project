import { useContext } from "react";
import { SHome } from "./Home.styled";
import { ThemeContext } from "@src/providers/ThemeProvider/ThemeContext";
import { BackSlider } from "../../components/HomeComponents/Slidder";
import { SaleProducts } from "@src/components/HomeComponents/Sale_Products";
import Products from "../ProductsPage";
import { ProductsSlider } from "@src/components/HomeComponents/ProductsSlider";
import { useGlobalProvider } from "@src/providers/GlobalProvider";
import { FcSalesPerformance } from "react-icons/fc";

export function Home() {
  const { products, saleProducts } = useGlobalProvider();
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
          <div className="shadow-xl relative bg-white p-2 bg-slate-700 rounded-xl">
            <div className="flex items-end gap-2">
              <h1 className="text-orange-600">Only Sale</h1>
              <FcSalesPerformance className="size-12" />
            </div>
            <ProductsSlider
              relativeProp={undefined}
              imgHeight={225}
              itemsSHow={6}
              products={saleProducts}
            />
          </div>

          <Products />
        </div>
      </div>
      <button onClick={() => toggleTheme()}>შეცვალე theme</button>
    </SHome>
  );
}
