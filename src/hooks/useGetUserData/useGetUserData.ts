import { PrivateAxios } from "@src/utils/PriveteAxios";
import { useEffect, useState } from "react";
import { useAuthProvider } from "@src/providers/AuthProvider";
import { TUserData } from "@src/@types/TuserData";

export function useGetUserData() {
  const { authStatus } = useAuthProvider();
  const [userdata, setUserData] = useState<TUserData>();

  async function GetUserData() {
    const resp = await PrivateAxios.get("/user/current-user");
    setUserData(resp.data);
  }
  useEffect(() => {
    GetUserData();
  }, [authStatus]);

  return { userdata };
}
