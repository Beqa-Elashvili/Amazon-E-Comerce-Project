import { useEffect, useRef } from "react";
import { BaseAxios } from "@src/utils/Base_Axios";
import { useGlobalProvider } from "@src/providers/GlobalProvider";
import { useParams } from "react-router-dom";

export function usePriceFilter() {
  const { sliderValue, setSliderValue, setCategoryProducts } =
    useGlobalProvider();
  const { categoryName } = useParams();
  async function filterPrice() {
    const resp = await BaseAxios.get(
      `/product?categoryName=${categoryName}&minPrice=${sliderValue[0]}&maxPrice=${sliderValue[1]}`
    );
    setCategoryProducts(resp.data.products);
  }

  useEffect(() => {
    let timer: number;
    const delayedFilterPrice = () => {
      timer = setTimeout(() => {
        if (categoryName) {
          filterPrice();
        }
      }, 500);
    };
    delayedFilterPrice();

    return () => clearTimeout(timer);
  }, [sliderValue]);

  return { sliderValue, setSliderValue };
}
