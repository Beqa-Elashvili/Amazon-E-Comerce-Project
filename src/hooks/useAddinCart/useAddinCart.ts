import { PrivateAxios } from "@src/utils/PriveteAxios";
import { useState } from "react";
import { TProducts } from "@src/providers/GlobalProvider/GlobalContext";

export function useAddinCart() {
  const [loading, setLoading] = useState<boolean>(false);
  const [cartProducts, setcartProducts] = useState<TProducts[]>();
  async function addtoCart(productId: string) {
    try {
      setLoading(true);
      const resp = await PrivateAxios.post("/cart", {
        product_id: productId,
      });
      // console.log(resp);
    } catch (error) {
      alert("An attempt to add a product failed");
    } finally {
      setLoading(false);
    }
  }
  return { loading, addtoCart };
}
