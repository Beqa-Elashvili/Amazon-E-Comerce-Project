import { PrivateAxios } from "@src/utils/PriveteAxios";
import { useState } from "react";

export function usePurchaseItems() {
  const [loading, setLodaing] = useState<boolean>();
  async function PurchaseItems(
    total_Price: number,
    total_Items: number | undefined
  ) {
    try {
      setLodaing(true);
      const resp = PrivateAxios.post("/purchases", {
        totalPrice: total_Price,
        totalItems: total_Items,
      });
    } catch (error) {
      alert("Buy Items Failed");
    } finally {
      setLodaing(false);
    }
  }

  return { PurchaseItems };
}
