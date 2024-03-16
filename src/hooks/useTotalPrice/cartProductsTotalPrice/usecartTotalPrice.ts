import { useState, useEffect } from "react";
import { useGlobalProvider } from "@src/providers/GlobalProvider";

export function usecartTotalPrice() {
  const { cartProducts } = useGlobalProvider();
  const [CartTotalprice, setCartTotalprice] = useState<number>(0);

  function sumPrices() {
    if (!cartProducts || cartProducts.length === 0) {
      return 0;
    }
    const totalPrice = cartProducts.reduce((accumulator, currentItem) => {
      const price =
        currentItem.cartProduct.salePrice !== null
          ? currentItem.cartProduct.salePrice
          : currentItem.cartProduct.price;
      return accumulator + price * currentItem.count;
    }, 0);
    setCartTotalprice(totalPrice);
  }
  useEffect(() => {
    sumPrices();
  }, [cartProducts]);

  return { CartTotalprice };
}
