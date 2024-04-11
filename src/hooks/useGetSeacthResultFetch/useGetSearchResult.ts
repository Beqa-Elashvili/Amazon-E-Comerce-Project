import { TProducts } from "@src/providers/GlobalProvider/GlobalContext";
import { BaseAxios } from "@src/utils/Base_Axios";
import { Switch } from "antd";
import { useState } from "react";

export function useGetSearchResult() {
  const [SearchResults, setSearchResult] = useState<TProducts[]>();

  async function GetSearchResult(categoryName: string, productName: string) {
    if (productName === "productName=") {
      return;
    }
    if (categoryName === "All") {
      const resp = await BaseAxios.get(`/product?pageSize=25&${productName}`);
      setSearchResult(resp.data.products);
      return;
    }
    const resp = await BaseAxios.get(
      `/product?categoryName=${categoryName}&pageSize=25&${productName}`
    );
    setSearchResult(resp.data.products);
  }
  return { GetSearchResult, SearchResults };
}
