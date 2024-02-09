import { PrivateAxios } from "@src/utils/PriveteAxios";
import { useEffect, useState } from "react";
import { TProducts } from "@src/providers/GlobalProvider/GlobalContext";
import { useAuthPRovider } from "@src/providers/AuthProvider";

export function getCartProducts() {
  const [cartProducts, setCartProducts] = useState<TProducts[]>();
  const { authStatus } = useAuthPRovider();

  async function getcartProducts() {
    const resp = await PrivateAxios.get("/cart");
    setCartProducts(resp.data);
    console.log(resp.data);
  }
  useEffect(() => {
    if (authStatus === "authorized") {
      getcartProducts();
    }
  }, []);
  return { cartProducts };
}
