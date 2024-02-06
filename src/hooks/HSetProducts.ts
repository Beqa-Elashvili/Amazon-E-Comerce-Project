import { BaseAxios } from "@src/utils/Base_Axios";

export async function GlobalAPI() {
  async function getProducts(url: string) {
    const resp = await BaseAxios.get(url);
    console.log(resp.data);
  }
  return { getProducts };
}
