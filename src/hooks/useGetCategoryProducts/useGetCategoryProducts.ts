import { BaseAxios } from "@src/utils/Base_Axios";
import { useGlobalProvider } from "@src/providers/GlobalProvider";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
export function useGetCategoryProducts() {
  const { categoryProducts, setCategoryProducts } = useGlobalProvider();
  const { id } = useParams();

  async function getCategoryProducts(id: string) {
    try {
      const resp = await BaseAxios.get(
        `/product?pageSize=20&categoryName=${id}`
      );
      setCategoryProducts(resp.data.products);
    } catch (error) {
      console.error("Get Category Products Failed");
      alert("Get Category Products Failed");
    }
  }
  useEffect(() => {
    if (id) {
      getCategoryProducts(id);
    }
  }, [id]);

  return {
    getCategoryProducts,
    categoryProducts,
  };
}
