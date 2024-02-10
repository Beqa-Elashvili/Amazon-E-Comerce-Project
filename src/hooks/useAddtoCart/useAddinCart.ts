import { PrivateAxios } from "@src/utils/PriveteAxios";
import { useState } from "react";

export function useAddinCart() {
  const [loading, setLoading] = useState<boolean>(false);
  async function addtoCart(productId: string) {
    try {
      setLoading(true);
      const resp = await PrivateAxios.post("/cart", {
        product_id: productId,
      });
    } catch (error) {
      alert("An attempt to add a product failed");
    } finally {
      setLoading(false);
    }
  }
  return { loading, addtoCart };
}
