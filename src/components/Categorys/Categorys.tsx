import { BaseAxios } from "@src/utils/Base_Axios";
import { useEffect } from "react";
import { useGlobalProvider } from "@src/providers/GlobalProvider";

export function Categorys() {
  const { categorys, setCategorys } = useGlobalProvider();

  async function getCategory() {
    try {
      const resp = await BaseAxios.get("/product-category");
      setCategorys(resp.data);
    } catch (error) {
      alert("fetch Category error");
    }
  }
  useEffect(() => {
    getCategory();
  }, []);
  console.log(categorys);
}
