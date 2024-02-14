import { useEffect, useState } from "react";
import { useGetCartProducts } from "../useAddtoCart/getCartProducts";
import { useAuthPRovider } from "@src/providers/AuthProvider";
import { useNavigate } from "react-router-dom";

export function useCartCount() {
  const { authStatus } = useAuthPRovider();
  const { cartProducts } = useGetCartProducts();
  const [addProductsCount, setAddProductCount] = useState<number>();
  const navigate = useNavigate();
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
    if (authStatus === "unauthorized") {
      setAddProductCount(0);
    } else {
      setAddProductCount(getCount);
    }
  }, [cartProducts, authStatus]);

  return { addProductsCount };
}
