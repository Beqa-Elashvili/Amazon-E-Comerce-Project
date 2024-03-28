import { PrivateAxios } from "@src/utils/PriveteAxios";
import { useState } from "react";
import { getWishlist } from "./GetWishlist";
import { useGlobalProvider } from "@src/providers/GlobalProvider";

export function useAddWishlist() {
  const { wishlist, setwishlist } = useGlobalProvider();
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
      await getWishlist(setwishlist);
    } catch (error) {
      console.error("add like failed");
      alert("failed");
    } finally {
      setLoading(false);
    }
  }
  return { AddWishlist, loading };
}
