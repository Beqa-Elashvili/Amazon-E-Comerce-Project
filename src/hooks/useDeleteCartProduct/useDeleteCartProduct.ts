import { PrivateAxios } from "@src/utils/PriveteAxios";
import { useState } from "react";
import { useGetCartProducts } from "../useAddtoCart/getCartProducts";

export function useDeleteCartProduct() {
  const [loading, setLoading] = useState(false);
  const { getcartProducts } = useGetCartProducts();

  async function deleteCartProduct(productId: string) {
    try {
      setLoading(true);
      const resp = await PrivateAxios.delete(`/cart/${productId}`);
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
