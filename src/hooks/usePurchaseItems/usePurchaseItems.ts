import { PrivateAxios } from "@src/utils/PriveteAxios";

export function usePurchaseItems() {
  async function PurchaseItems(
    total_Price: number,
    total_Items: number | undefined
  ) {
    const resp = PrivateAxios.post("/purchases", {
      totalPrice: total_Price,
      totalItems: total_Items,
    });
    console.log(total_Items);
    console.log(total_Price);
  }

  return { PurchaseItems };
}
