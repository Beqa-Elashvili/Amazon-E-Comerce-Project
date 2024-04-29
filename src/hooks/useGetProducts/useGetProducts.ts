import { BaseAxios } from "@src/utils/Base_Axios";
import { Dispatch, SetStateAction } from "react";
import { TProducts } from "@src/providers/GlobalProvider/GlobalContext";

export async function Getproducts(setProducts: Dispatch<SetStateAction<TProducts[]>>) {
  try {
    const responsive = await BaseAxios.get("/product?pageSize=55");
    setProducts(responsive.data.products);
  } catch (error) {
    console.error("failed  to get products");
  }
}
