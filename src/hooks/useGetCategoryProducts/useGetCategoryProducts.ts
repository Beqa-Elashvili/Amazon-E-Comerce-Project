import { BaseAxios } from "@src/utils/Base_Axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGlobalProvider } from "@src/providers/GlobalProvider";

export function UseGetCategoryProducts() {
  const { setCategoryProducts, categoryProducts, setProductsSlider } =
    useGlobalProvider();
  const [loading, setLoading] = useState<boolean>(false);
  const { categoryName, productName } = useParams();

  async function getCategoryProducts(
    category: string,
    productName: string
  ): Promise<void> {
    try {
      setLoading(true);
      const resp = await BaseAxios.get(
        `/product?categoryName=${category}&pageSize=25&${productName}`
      );
      setCategoryProducts(resp.data.products);
      if (categoryName && productName === "productName") {
        setProductsSlider(resp.data.products);
      }
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    } catch (error) {
      console.error("Get Category Products Failed");
      alert("Get Category Products Failed");
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }
  }
  useEffect(() => {
    if (categoryName && productName) {
      getCategoryProducts(categoryName, productName);
      console.log("gaeshva");
    }
  }, [categoryName, productName]);

  return { getCategoryProducts, categoryProducts, loading };
}
