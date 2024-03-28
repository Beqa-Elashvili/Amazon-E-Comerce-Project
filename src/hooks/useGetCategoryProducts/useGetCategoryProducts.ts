import { BaseAxios } from "@src/utils/Base_Axios";
import { useGlobalProvider } from "@src/providers/GlobalProvider";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function useGetCategoryProducts() {
  const { categoryProducts, setCategoryProducts } = useGlobalProvider();
  const { category } = useParams();
  const [loading, setLoading] = useState<boolean>(false);

  async function getCategoryProducts(category: string) {
    try {
      setLoading(true);
      const resp = await BaseAxios.get(
        `/product?categoryName=${category}&pageSize=25`
      );
      setCategoryProducts(resp.data.products);
      setLoading(false);
    } catch (error) {
      console.error("Get Category Products Failed");
      alert("Get Category Products Failed");
    } finally {
      setLoading(false);
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
    loading,
  };
}
