import { Dispatch, SetStateAction, useEffect } from "react";
import { BaseAxios } from "@src/utils/Base_Axios";
import { TProducts } from "@src/providers/GlobalProvider/GlobalContext";

export async function GetSaleProducts(
  setSaleProducts: Dispatch<SetStateAction<TProducts[]>>
) {
  const resp = await BaseAxios.get("/product?onlySales=true");
  setSaleProducts(resp.data.products);
}
