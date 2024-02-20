import { PrivateAxios } from "@src/utils/PriveteAxios";
import { useState } from "react";
import { useGetCartProducts } from "../getCartProducts";

export function useDeleteCartProduct() {
  const [loading, setLoading] = useState(false);
  const { getcartProducts } = useGetCartProducts();

  async function deleteCartProduct(productId: string, all: boolean) {
    try {
      setLoading(true);
      const resp = await PrivateAxios.delete(
        `/cart/${productId}?removeAll=${all}`
      );
      await getcartProducts();
    } catch (error) {
      console.error("Failed to delete product", error);
      alert("Failed to delete product");
    } finally {
      setLoading(false);
    }
  }
  return { deleteCartProduct, loading };
}
