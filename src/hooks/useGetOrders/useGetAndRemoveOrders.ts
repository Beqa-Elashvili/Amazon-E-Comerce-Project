import { PrivateAxios } from "@src/utils/PriveteAxios";
import { useEffect } from "react";
import { useGlobalProvider } from "@src/providers/GlobalProvider";

export function useGetAndRemoveOrders() {
  const { Orders, setOrders } = useGlobalProvider();
  async function getOrders() {
    const resp = await PrivateAxios.get("/purchases");
    setOrders(resp.data);
  }

  async function RemoveOrders(id: string) {
    const resp = await PrivateAxios.delete(`/purchases/${id}`);
    await getOrders();
  }
  useEffect(() => {
    getOrders();
  }, []);
  return { Orders, getOrders, RemoveOrders };
}
