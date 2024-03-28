import { PrivateAxios } from "@src/utils/PriveteAxios";
import { TProducts } from "@src/providers/GlobalProvider/GlobalContext";

export async function getcartProducts(
  setCartProducts: React.Dispatch<React.SetStateAction<TProducts[]>>
) {
  try {
    const resp = await PrivateAxios.get("/cart");
    setCartProducts(resp.data);
  } catch (error) {
    alert("fetch data failed");
  }
}
