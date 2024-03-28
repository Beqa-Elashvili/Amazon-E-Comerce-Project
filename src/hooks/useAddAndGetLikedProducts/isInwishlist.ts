import { useGlobalProvider } from "@src/providers/GlobalProvider";

export function useIsProductInWishlist() {
  const { wishlist } = useGlobalProvider();

  function isInWishlist(productId: string) {
    return wishlist?.some((item) => item.likedProduct.id === productId);
  }
  return { isInWishlist };
}
