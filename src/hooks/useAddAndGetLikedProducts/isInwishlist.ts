import { useGetWishlist } from "@src/hooks/useAddAndGetLikedProducts";

export function useIsProductInWishlist() {
  const { wishlist } = useGetWishlist();

  function isInWishlist(productId: string) {
    return wishlist?.some((item) => item.likedProduct.id === productId);
  }
  return { isInWishlist };
}
