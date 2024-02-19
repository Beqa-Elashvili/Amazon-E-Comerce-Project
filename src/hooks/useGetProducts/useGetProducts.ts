import { BaseAxios } from "@src/utils/Base_Axios";
import { useEffect } from "react";
import { useGlobalProvider } from "@src/providers/GlobalProvider";

export function useGetProducts() {
  const { products, setProducts } = useGlobalProvider();
  async function Getproducts() {
    const responsive = await BaseAxios.get("/product?pageSize=25");
    setProducts(responsive.data.products);
  }
  useEffect(() => {
    Getproducts();
  }, []);
  return { products };
}
