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
      const totalCount = cartProducts.forEach((item) => (count += item.count));
      return count;
    }
  }
  useEffect(() => {
    if (authStatus === "unauthorized") {
      setAddProductCount(0);
    } else {
      setAddProductCount(getCount);
    }
  }, [cartProducts, authStatus]);

  return { addProductsCount };
}
