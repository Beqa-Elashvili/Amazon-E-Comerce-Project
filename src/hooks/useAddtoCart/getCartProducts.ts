import { BaseAxios } from "@src/utils/Base_Axios";
import { useEffect } from "react";
import { useAuthPRovider } from "@src/providers/AuthProvider";
import { useGlobalProvider } from "@src/providers/GlobalProvider";

export function useGetCartProducts() {
  const { cartProducts, setCartProducts } = useGlobalProvider();
  const { authStatus } = useAuthPRovider();

  async function getcartProducts() {
    const resp = await BaseAxios.get("/cart");
    setCartProducts(resp.data);
  }
  useEffect(() => {
    getcartProducts();
  }, []);
  return { cartProducts };
}
