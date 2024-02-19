import { useEffect } from "react";
import { PrivateAxios } from "@src/utils/PriveteAxios";
import { useAuthPRovider } from "@src/providers/AuthProvider";
import { useGlobalProvider } from "@src/providers/GlobalProvider";

export function useGetCartProducts() {
  const { cartProducts, setCartProducts } = useGlobalProvider();
  const { authStatus } = useAuthPRovider();

  async function getcartProducts() {
    try {
      const resp = await PrivateAxios.get("/cart");
      setCartProducts(resp.data);
    } catch (error) {
      alert("fetch data failed");
    }
  }
  useEffect(() => {
    if (authStatus === "authorized") {
      getcartProducts();
    }
  }, [authStatus]);
  return { cartProducts, getcartProducts };
}