import { useEffect, useRef } from "react";
import { BaseAxios } from "@src/utils/Base_Axios";
import { useGlobalProvider } from "@src/providers/GlobalProvider";
import { useParams } from "react-router-dom";

export function usePriceFilter() {
  const { sliderValue, setSliderValue, setCategoryProducts } =
    useGlobalProvider();

  const { categoryName, productName, page } = useParams();

  async function filterPrice() {
    if (categoryName === "All") {
      const resp = await BaseAxios.get(
        `/product?minPrice=${sliderValue[0]}&page=${page}&pageSize=10&maxPrice=${sliderValue[1]}`
      );
      setCategoryProducts(resp.data.products);
      return;
    }
    const resp = await BaseAxios.get(
      `/product?page=${page}&pageSize=10&categoryName=${categoryName}&minPrice=${sliderValue[0]}&maxPrice=${sliderValue[1]}`
    );
    setCategoryProducts(resp.data.products);
  }

  useEffect(() => {
    let timer: number;
    if (productName === "productName" || productName === "productName=") {
      const delayedFilterPrice = () => {
        timer = setTimeout(() => {
          filterPrice();
        }, 500);
      };
      delayedFilterPrice();
      return () => clearTimeout(timer);
    }
  }, [sliderValue]);

  return { sliderValue, setSliderValue };
}
