import { useEffect, useState } from "react";
import { useGetCartProducts } from "../useAddtoCart/getCartProducts";
import { useAuthPRovider } from "@src/providers/AuthProvider";

export function useCartCount() {
  const { authStatus } = useAuthPRovider();
  const { cartProducts } = useGetCartProducts();
  const [addProductsCount, setAddProductCount] = useState<number>();

  function getCount() {
    if (cartProducts) {
      let count = 0;
      for (let i = 0; i <= cartProducts.length; i++) {
        count = i;
      }
      return count;
    }
  }
  useEffect(() => {
    if (authStatus === "authorized") {
        setAddProductCount(getCount);
    } else {
        setAddProductCount(0)
    }
  }, [cartProducts, authStatus]);

  return { addProductsCount };
}
