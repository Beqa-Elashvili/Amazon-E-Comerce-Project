import { BaseAxios } from "@src/utils/Base_Axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGlobalProvider } from "@src/providers/GlobalProvider";

export function UseGetCategoryProducts() {
  const { setCategoryProducts, categoryProducts } = useGlobalProvider();
  const [loading, setLoading] = useState<boolean>(false);
  const { categoryName } = useParams();

  async function getCategoryProducts(category: string): Promise<void> {
    try {
      setLoading(true);
      const resp = await BaseAxios.get(
        `/product?pageSize=25&categoryName=${category}`
      );
      setCategoryProducts(resp.data.products);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    } catch (error) {
      console.error("Get Category Products Failed");
      alert("Get Category Products Failed");
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    if (categoryName) {
      console.log("gfgfgf");
      getCategoryProducts(categoryName);
    }
  }, [categoryName]);
  return { getCategoryProducts, categoryProducts, loading };
}
