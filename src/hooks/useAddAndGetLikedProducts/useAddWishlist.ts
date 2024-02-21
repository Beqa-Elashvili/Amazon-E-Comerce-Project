import { PrivateAxios } from "@src/utils/PriveteAxios";
import { useState } from "react";
import { useGetWishlist } from "./useGetWishlist";

export function useAddWishlist() {
  const { wishlist, GetWishlist } = useGetWishlist();
  const [loading, setLoading] = useState<boolean>(false);

  async function AddWishlist(productId: string) {
    try {
      const filtered = wishlist?.some(
        (item) => item.likedProduct.id === productId
      );
      if (filtered) {
        alert("alredy in wishlist");
        return;
      }
      setLoading(true);
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
