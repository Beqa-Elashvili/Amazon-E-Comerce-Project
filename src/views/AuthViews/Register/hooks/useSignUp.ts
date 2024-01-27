import { registAxios } from "@src/utils/regist_Axios";
import { RegisterFormValue } from "../Register";

export function useSignUp() {
  async function SignUpUser(values: RegisterFormValue) {
    const resp = await registAxios.post("/auth/register", values);
    console.log(resp.data);
  }
  return { SignUpUser };
}
