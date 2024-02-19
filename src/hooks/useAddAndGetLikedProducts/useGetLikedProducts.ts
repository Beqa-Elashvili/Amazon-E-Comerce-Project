import { PrivateAxios } from "@src/utils/PriveteAxios";
import { useGlobalProvider } from "@src/providers/GlobalProvider";
import { useEffect, useState } from "react";
import { useAuthPRovider } from "@src/providers/AuthProvider";

export function useGetLikedProducts() {
  const { likedProducts, setLikedProducts } = useGlobalProvider();
  const [loading, setLoading] = useState<boolean>(false);
  const { authStatus } = useAuthPRovider();

  async function GetLikedProducts() {
    try {
      setLoading(true);
      const resp = await PrivateAxios.get("/liked-products");
      setLikedProducts(resp.data);
    } catch (error) {
      alert("get liked products failed");
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    if (authStatus === "authorized") {
      GetLikedProducts();
    }
  }, [authStatus]);

  return { likedProducts, loading };
}
