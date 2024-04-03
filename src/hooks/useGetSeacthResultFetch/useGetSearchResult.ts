import { TProducts } from "@src/providers/GlobalProvider/GlobalContext";
import { BaseAxios } from "@src/utils/Base_Axios";
import { useState } from "react";

export function useGetSearchResult() {
  const [SearchResults, setSearchResult] = useState<TProducts[]>();

  async function GetSearchResult(categoryName: string, productName: string) {
    const resp = await BaseAxios.get(
      `/product?categoryName=${categoryName}&pageSize=25&${productName}`
    );
    setSearchResult(resp.data.product);
  }
  return { GetSearchResult, SearchResults };
}
