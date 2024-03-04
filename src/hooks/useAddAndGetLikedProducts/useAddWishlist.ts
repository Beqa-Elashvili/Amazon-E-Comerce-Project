import { PrivateAxios } from "@src/utils/PriveteAxios";
import { useState } from "react";
import { useGetWishlist } from "./useGetWishlist";

export function useAddWishlist() {
  const { wishlist, GetWishlist } = useGetWishlist();
  const [loading, setLoading] = useState<boolean>(false);

  async function AddWishlist(productId: string) {
    try {
      setLoading(true);
      const isInWishlist = wishlist?.some(
        (item) => item.likedProduct.id === productId
      );
      if (isInWishlist) {
        alert("product alredy in wishlist");
        return;
      }
      const resp = await PrivateAxios.post("/liked-products", {
        product_id: productId,
      });
      await GetWishlist();
    } catch (error) {
      console.error("add like failed");
      alert("failed");
    } finally {
      setLoading(false);
    }
  }
  return { AddWishlist, loading };
}
