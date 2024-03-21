import { BaseAxios } from "@src/utils/Base_Axios";
import { useEffect } from "react";
import { useGlobalProvider } from "@src/providers/GlobalProvider";
import { Divider } from "antd";

export function useGetCategorys() {
  const { categorys, setCategorys } = useGlobalProvider();

  async function getCategory() {
    try {
      const resp = await BaseAxios.get("/product-category");
      setCategorys(resp.data);
    } catch (error) {
      console.error("Category fetch error", error);
    }
  }
  useEffect(() => {
    getCategory();
  }, []);

  return { categorys };
}
