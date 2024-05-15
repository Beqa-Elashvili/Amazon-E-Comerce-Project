import { PrivateAxios } from "@src/utils/PriveteAxios";
import { useState } from "react";
import { getcartProducts } from "./getCartProducts";
import { useGlobalProvider } from "@src/providers/GlobalProvider";
import { useAuthProvider } from "@src/providers/AuthProvider";
import { useNavigate } from "react-router-dom";

export function useAddinCart() {
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const { authStatus } = useAuthProvider();
  const { setCartProducts } = useGlobalProvider();

  async function addToCart(productId: string) {
    try {
      if (authStatus !== "authorized") {
        navigate("/Login");
      }
      setLoading(true);
      const resp = await PrivateAxios.post("/cart", {
        product_id: productId,
      });
      await getcartProducts(setCartProducts);
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

  return { loading, addToCart };
}
