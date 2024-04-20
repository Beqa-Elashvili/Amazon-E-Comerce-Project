import { BaseAxios } from "@src/utils/Base_Axios";
import { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { useGlobalProvider } from "@src/providers/GlobalProvider";

export function UseGetCategoryProducts() {
  const {
    setCategoryProducts,
    categoryProducts,
    setSliderValue,
    setProductsSlider,
    productsSlider
  } = useGlobalProvider();
  const [loading, setLoading] = useState<boolean>(false);
  const { categoryName, productName, page: pageParam } = useParams();
  const page = Number(pageParam);
  const [dataTotal, setDataTotal] = useState<number>(15);
  const pageSize = 10;


  async function getCategoryProducts(
    category: string,
    productName: string,
    page: number
  ): Promise<void> {
    try {
      setSliderValue([0, 0]);
      setLoading(true);
      if (categoryName === "All") {
        const resp = await BaseAxios.get(
          `/product?page=${page}&pageSize=${pageSize}&${productName}`
        );
        setDataTotal(resp.data.total);
        setCategoryProducts(resp.data.products);
        return;
      }
      const resp = await BaseAxios.get(
        `/product?categoryName=${category}&page=${page}&pageSize=${pageSize}&${productName}`
      );
      setDataTotal(resp.data.total);
      setCategoryProducts(resp.data.products);

      if (categoryName && productName === "productName" && page === 1) {
        setProductsSlider(resp.data.products);
      }
      setLoading(false);
    } catch (error) {
      console.error("Get Category Products Failed");
      alert("Get Category Products Failed");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (categoryName && productName && page) {
      if (dataTotal !== undefined) {
        const TotalPages = dataTotal / pageSize;
        setDataTotal(TotalPages);
      }
      getCategoryProducts(categoryName, productName, page);
    }
  }, [categoryName, productName, page]);

  return {
    getCategoryProducts,
    dataTotal,
    pageSize,
    categoryProducts,
    loading,
  };
}
