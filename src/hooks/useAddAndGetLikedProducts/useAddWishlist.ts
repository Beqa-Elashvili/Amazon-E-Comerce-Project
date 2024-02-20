import { PrivateAxios } from "@src/utils/PriveteAxios";
import { useState } from "react";
import { useGetWishlist } from "./useGetWishlist";

export function useAddWishlist() {
  const { wishlist } = useGetWishlist();
  const [loading, setLoading] = useState<boolean>(false);

  async function AddWishlist(productId: string) {
    const filter = wishlist?.filter(
      (item) => item.likedProduct.id === productId
    );
    console.log(filter);
    
    try {
      setLoading(true);
      const resp = await PrivateAxios.post("/liked-products", {
        product_id: productId,
      });
    } catch (error) {
      console.error("add like failed");
      alert("failed");
    } finally {
      setLoading(false);
    }
  }
  return { AddWishlist, loading };
}
