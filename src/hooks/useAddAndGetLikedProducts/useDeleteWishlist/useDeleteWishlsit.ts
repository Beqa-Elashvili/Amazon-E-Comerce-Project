import { PrivateAxios } from "@src/utils/PriveteAxios";
import { useGetWishlist } from "../useGetWishlist";
import { useState } from "react";

export function useDeleteWishlist() {
  const { GetWishlist } = useGetWishlist();
  const [loading, setLoading] = useState<boolean>(false);

  async function DeleteWishlist(productId: string) {
    try {
      setLoading(true);
      const resp = await PrivateAxios.delete(`/liked-products/${productId}`);
      await GetWishlist();
    } catch (error) {
      alert("Unlike poroduct failed");
    } finally {
      setLoading(false);
    }
  }
  return { DeleteWishlist, loading, setLoading };
}
