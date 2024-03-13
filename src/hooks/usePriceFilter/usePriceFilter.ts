import { useEffect, useRef } from "react";
import { BaseAxios } from "@src/utils/Base_Axios";
import { useGlobalProvider } from "@src/providers/GlobalProvider";

export function usePriceFilter() {
  const { CategoryName, sliderValue, setSliderValue, setCategoryProducts } =
    useGlobalProvider();

  async function filterPrice() {
    const resp = await BaseAxios.get(
      `http://localhost:3000/product?categoryName=${CategoryName}&minPrice=${sliderValue[0]}&maxPrice=${sliderValue[1]}`
    );
    setCategoryProducts(resp.data.products);
  }

  useEffect(() => {
    let timer: number;

    const delayedFilterPrice = () => {
      timer = setTimeout(() => {
        if (CategoryName) {
          filterPrice();
        }
      }, 500);
    };
    delayedFilterPrice();
    return () => clearTimeout(timer);
  }, [sliderValue]);

  return { sliderValue, setSliderValue };
}
