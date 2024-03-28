import { PrivateAxios } from "@src/utils/PriveteAxios";
import { useState } from "react";
import { getcartProducts } from "../getCartProducts";
import { useGlobalProvider } from "@src/providers/GlobalProvider";

export function useDeleteCartProduct() {
  const [loading, setLoading] = useState(false);
  const { setCartProducts } = useGlobalProvider();

  async function deleteCartProduct(productId: string, all: boolean) {
    try {
      setLoading(true);
      const resp = await PrivateAxios.delete(
        `/cart/${productId}?removeAll=${all}`
      );
      await getcartProducts(setCartProducts);
    } catch (error) {
      console.error("Failed to delete product", error);
      alert("Failed to delete product");
    } finally {
      setLoading(false);
    }
  }
  return { deleteCartProduct, loading };
}
