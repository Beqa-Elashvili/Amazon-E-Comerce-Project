import { PrivateAxios } from "@src/utils/PriveteAxios";
import { useGlobalProvider } from "@src/providers/GlobalProvider";
import { useEffect, useState } from "react";
import { useAuthPRovider } from "@src/providers/AuthProvider";

export function useGetWishlist() {
  const { wishlist, setwishlist } = useGlobalProvider();
  const [loading, setLoading] = useState<boolean>(false);
  const { authStatus } = useAuthPRovider();

  async function GetWishlist() {
    try {
      setLoading(true);
      const resp = await PrivateAxios.get("/liked-products");
      setwishlist(resp.data);
    } catch (error) {
      alert("get liked products failed");
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    if (authStatus === "authorized") {
      GetWishlist();
    }
  }, [authStatus]);

  return { GetWishlist, wishlist, loading };
}
