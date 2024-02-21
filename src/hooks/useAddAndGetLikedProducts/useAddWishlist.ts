import { PrivateAxios } from "@src/utils/PriveteAxios";
import { useState } from "react";
import { useGetWishlist } from "./useGetWishlist";
import { useDeleteWishlist } from "./useDeleteWishlist";

export function useAddWishlist() {
  const { wishlist, GetWishlist } = useGetWishlist();
  const { DeleteWishlist } = useDeleteWishlist();
  const [loading, setLoading] = useState<boolean>(false);

  async function AddWishlist(productId: string) {
    try {
      setLoading(true);
      // const isInWishlist = wishlist?.some(
      //   (item) => item.likedProduct.id === productId
      // );
      // if (isInWishlist) {
      //   await DeleteWishlist(productId);
      // } else {
      // }
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
