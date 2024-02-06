import { useContext, useEffect, useState } from "react";
import { SHome } from "./Home.styled";
import { ThemeContext } from "@src/providers/ThemeProvider/ThemeContext";
import { BackSlider } from "../../components/HomeComponents/Slidder";
import { useGlobalProvider } from "@src/providers/GlobalProvider";
import { BaseAxios } from "@src/utils/Base_Axios";
import { SaleProducts } from "@src/components/HomeComponents/Sale_Products";

export function Home() {
  const { toggleTheme } = useContext(ThemeContext);
  const { setCategorys, setProducts } = useGlobalProvider();

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
      <div className="relative">
        <BackSlider />
        <SaleProducts />
      </div>
      <div className="mt-44">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis
        itaque doloribus reiciendis modi repudiandae, in molestias, rerum
        aperiam quia ex, dolorum nostrum nemo quas excepturi minima mollitia
        inventore quidem. Ullam.
      </div>
      <button onClick={() => toggleTheme()}>შეცვალე theme</button>
    </SHome>
  );
}
