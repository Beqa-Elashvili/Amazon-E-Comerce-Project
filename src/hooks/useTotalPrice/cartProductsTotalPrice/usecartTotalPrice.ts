import { useState, useEffect } from "react";
import { useGetCartProducts } from "@src/hooks/useAddAndGetCart";

export function usecartTotalPrice() {
  const { cartProducts } = useGetCartProducts();
  const [CartTotalprice, setCartTotalprice] = useState<number>();

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
