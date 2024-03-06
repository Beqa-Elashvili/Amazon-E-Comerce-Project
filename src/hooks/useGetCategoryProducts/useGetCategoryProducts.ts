import { BaseAxios } from "@src/utils/Base_Axios";
import { useGlobalProvider } from "@src/providers/GlobalProvider";
import { useEffect } from "react";
export function useGetCategoryProducts() {
  const {
    categoryProducts,
    setCategoryProducts,
    setCategoryName,
    CategoryName,
  } = useGlobalProvider();

  useEffect(() => {
    const name = localStorage.getItem("category_name");
    if (name) {
      setCategoryName(name);
    }
  }, [CategoryName]);

  async function getCategoryProducts(category: string) {
    try {
      setCategoryName(category);
      localStorage.setItem("category_name", category);
      const resp = await BaseAxios.get(
        `/product?pageSize=20&categoryName=${category}`
      );
      setCategoryProducts(resp.data.products);
    } catch (error) {
      console.error("Get Category Products Failed");
      alert("Get Category Products Failed");
    }
  }
  useEffect(() => {
    if (CategoryName) {
      getCategoryProducts(CategoryName);
    }
  }, [CategoryName]);

  return {
    getCategoryProducts,
    categoryProducts,
    CategoryName,
  };
}
