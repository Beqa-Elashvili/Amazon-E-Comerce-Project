import { BaseAxios } from "@src/utils/Base_Axios";
import { useGlobalProvider } from "@src/providers/GlobalProvider";
import { useState } from "react";

export function useGetCategoryProducts() {
  const {
    categoryProducts,
    setCategoryProducts,
    setCategoryName,
    CategoryName,
  } = useGlobalProvider();

  async function getCategoryProducts(categoryName: string) {
    try {
      setCategoryName(categoryName);
      const resp = await BaseAxios.get(
        `/product?pageSize=20&categoryName=${categoryName}`
      );
      setCategoryProducts(resp.data);
    } catch (error) {
      console.error("Get Category Products Failed");
      alert("Get Category Products Failed");
    }
  }
  return {
    getCategoryProducts,
    categoryProducts,
    CategoryName,
    setCategoryName,
  };
}