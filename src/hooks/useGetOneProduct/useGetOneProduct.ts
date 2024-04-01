import { BaseAxios } from "@src/utils/Base_Axios";
import { useParams } from "react-router-dom";
import { useGlobalProvider } from "@src/providers/GlobalProvider";
import { useEffect, useState } from "react";

export function useGetOneProduct() {
  const [loading, setLoading] = useState<boolean>(false);
  const { product, setProduct } = useGlobalProvider();
  const { category, id } = useParams();

  async function GetOneProduct(category: string, id: string) {
    try {
      setLoading(true);
      const resp = await BaseAxios.get(
        `/product/${id}?categoryName=${category}`
      );
      setProduct(resp.data);
    } catch (error) {
      console.error("getOneProduct failed");
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    if (category && id) {
      GetOneProduct(category, id);
    }
  }, [id]);
  return { GetOneProduct, loading, product };
}
