import { PrivateAxios } from "@src/utils/PriveteAxios";
import { useState } from "react";

export function useDeleteCartProduct() {
  const [loading, setLoading] = useState(false);
  async function deleteCartProduct(productId: string) {
    try {
      setLoading(true);
      const resp = await PrivateAxios.delete(`/cart/${productId}`);
    } catch (error) {
      alert("Failed to delete product");
    } finally {
      setLoading(false);
    }
  }
  return { deleteCartProduct };
}
