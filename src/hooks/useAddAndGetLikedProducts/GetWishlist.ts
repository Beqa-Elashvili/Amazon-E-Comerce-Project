import { PrivateAxios } from "@src/utils/PriveteAxios";
import { Dispatch, SetStateAction, useState } from "react";
import { TProducts } from "@src/providers/GlobalProvider/GlobalContext";

export async function getWishlist(
  setwishlist: Dispatch<SetStateAction<TProducts[]>>
): Promise<void> {
  try {
    const resp = await PrivateAxios.get("/liked-products");
    setwishlist(resp.data);
  } catch (error) {
    alert("Failed to get wishlist");
  }
}
