import { PrivateAxios } from "@src/utils/PriveteAxios";
import { useState } from "react";
import { useGetCartProducts } from "./getCartProducts";

export function useAddinCart() {
  const [loading, setLoading] = useState<boolean>(false);
  const { getcartProducts, cartProducts } = useGetCartProducts();

  async function addtoCart(productId: string) {
    const filteredCart = cartProducts?.filter((item) => item.id === productId);
    console.log(filteredCart);

    try {
      setLoading(true);
      const resp = await PrivateAxios.post("/cart", {
        product_id: productId,
      });
      await getcartProducts();
    } catch (error) {
      alert("An attempt to add a product failed");
    } finally {
      setLoading(false);
    }
  }

  return { loading, addtoCart };
}
