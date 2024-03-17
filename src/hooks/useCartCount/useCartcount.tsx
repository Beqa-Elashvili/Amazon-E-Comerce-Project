import { useEffect, useState } from "react";
// import { useGetCartProducts } from "../useAddAndGetCart/getCartProducts";
import { useAuthProvider } from "@src/providers/AuthProvider";
import { useGlobalProvider } from "@src/providers/GlobalProvider";

export function useCartCount() {
  const { authStatus } = useAuthProvider();
  const { cartProducts } = useGlobalProvider();
  const [ProductsCount, setAddProductCount] = useState<number>();

  function getCount() {
    if (cartProducts) {
      let count = 0;
      const totalCount: void = cartProducts.forEach(
        (item) => (count += item.count)
      );
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

  return { ProductsCount };
}
