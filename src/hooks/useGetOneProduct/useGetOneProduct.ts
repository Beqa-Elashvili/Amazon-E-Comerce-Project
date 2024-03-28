import { BaseAxios } from "@src/utils/Base_Axios";
import { useParams } from "react-router-dom";
import { useGlobalProvider } from "@src/providers/GlobalProvider";
import { useEffect, useState } from "react";

export function useGetOneProduct() {
  const [loading, setLoading] = useState<boolean>(false);
  const { product, setProduct } = useGlobalProvider();
  const { id } = useParams();

  async function GetOneProduct(id: string) {
    try {
      setLoading(true);
      const resp = await BaseAxios.get(`/product/${id}`);
      setProduct(resp.data);
    } catch (error) {
      console.error("getOneProduct failed");
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    if (id) {
      GetOneProduct(id);
    }
  }, [id]);
  return { GetOneProduct, loading, product };
}
