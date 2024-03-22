import { BaseAxios } from "@src/utils/Base_Axios";
import { useGlobalProvider } from "@src/providers/GlobalProvider";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
export function useGetCategoryProducts() {
  const { categoryProducts, setCategoryProducts } = useGlobalProvider();
  const { category } = useParams();

  async function getCategoryProducts(category: string) {
    try {
      const resp = await BaseAxios.get(
        `/product?categoryName=${category}&pageSize=25`
      );
      setCategoryProducts(resp.data.products);
    } catch (error) {
      console.error("Get Category Products Failed");
      alert("Get Category Products Failed");
    }
  }
  useEffect(() => {
    if (category) {
      getCategoryProducts(category);
    }
  }, [category]);

  return {
    getCategoryProducts,
    categoryProducts,
  };
}
