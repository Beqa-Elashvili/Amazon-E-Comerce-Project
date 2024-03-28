import { useState, useEffect } from "react";
import { useGlobalProvider } from "@src/providers/GlobalProvider";

export function usewishTotalPrice() {
  const { wishlist } = useGlobalProvider();
  const [wishlistTotalprice, setWishlistTotalprice] = useState<number>();

  function sumPrices() {
    if (!wishlist || wishlist.length === 0) {
      return 0;
    }
    const totalPrice = wishlist.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.likedProduct.price;
    }, 0);
    setWishlistTotalprice(totalPrice);
  }
  useEffect(() => {
    sumPrices();
  }, [wishlist]);

  return { wishlistTotalprice };
}
