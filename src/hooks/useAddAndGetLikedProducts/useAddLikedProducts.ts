import { PrivateAxios } from "@src/utils/PriveteAxios";
import { useState } from "react";

export function useAddLikedProducts() {
  const [loading, setLoading] = useState<boolean>(false);
  async function AddLikedProducts(productId: string) {
    try {
      setLoading(true);
      const resp = await PrivateAxios.post("/liked-products", {
        product_id: productId,
      });
    } catch (error) {
      console.error("add like failed");
      alert("failed");
    } finally {
      setLoading(false);
    }
  }
  return { AddLikedProducts, loading };
}
