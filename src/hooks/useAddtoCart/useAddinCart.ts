import { PrivateAxios } from "@src/utils/PriveteAxios";
import { useState } from "react";
import { useGetCartProducts } from "./getCartProducts";

export function useAddinCart() {
  const [loading, setLoading] = useState<boolean>(false);
  const { getcartProducts, cartProducts } = useGetCartProducts();

  async function addtoCart(productId: string) {
    try {
      setLoading(true);
      const resp = await PrivateAxios.post("/cart", {
        product_id: productId,
      });
      await getcartProducts();
    } catch (error) {
      console.error(
        "An error occurred while adding the product to the cart:",
        error
      );
      alert("An error occurred while adding the product to the cart:");
    } finally {
      setLoading(false);
    }
  }

  return { loading, addtoCart };
}
