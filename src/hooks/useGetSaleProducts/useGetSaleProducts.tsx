import { useEffect } from "react";
import { BaseAxios } from "@src/utils/Base_Axios";
import { useGlobalProvider } from "@src/providers/GlobalProvider";

export function useGetSaleProducts() {
  const { saleProducts, setSaleProducts } = useGlobalProvider();
  async function GetSaleProducts() {
    const resp = await BaseAxios.get("/product?onlySales=true");
    setSaleProducts(resp.data.products.slice(0, 4));
  }
  useEffect(() => {
    GetSaleProducts();
  }, []);
  return { saleProducts };
}
