import { PrivateAxios } from "@src/utils/PriveteAxios";
import { useEffect, useState } from "react";
import { useAuthProvider } from "@src/providers/AuthProvider";
import { useGlobalProvider } from "@src/providers/GlobalProvider";

export function useGetUserData() {
  const { authStatus } = useAuthProvider();
  const { userdata, setUserData } = useGlobalProvider();

  async function GetUserData() {
    const resp = await PrivateAxios.get("/user/current-user");
    setUserData(resp.data);
  }
  useEffect(() => {
    if (authStatus === "authorized") {
      GetUserData();
    }
  }, [authStatus]);

  return { userdata, GetUserData };
}
