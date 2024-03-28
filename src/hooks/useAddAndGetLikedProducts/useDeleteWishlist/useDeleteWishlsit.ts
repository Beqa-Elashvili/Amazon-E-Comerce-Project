import { PrivateAxios } from "@src/utils/PriveteAxios";
import { getWishlist } from "../GetWishlist";
import { useState } from "react";
import { useGlobalProvider } from "@src/providers/GlobalProvider";

export function useDeleteWishlist() {
  const { setwishlist } = useGlobalProvider();
  const [loading, setLoading] = useState<boolean>(false);

  async function DeleteWishlist(productId: string) {
    try {
      setLoading(true);
      const resp = await PrivateAxios.delete(`/liked-products/${productId}`);
      await getWishlist(setwishlist);
    } catch (error) {
      alert("Unlike poroduct failed");
    } finally {
      setLoading(false);
    }
  }
  return { DeleteWishlist, loading, setLoading };
}
