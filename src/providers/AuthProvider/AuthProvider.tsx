import { PropsWithChildren, useEffect, useState } from "react";
import { AuthContext, TAuthorizationStatus_Enum } from "./AuthContext";
import { TAuthTokens } from "@src/@types/TokensTypes";
import { TUserData } from "@src/@types/TuserData";
import { jwtDecode } from "jwt-decode";
import { useAuthHook } from "@src/hooks/UseAutht";
import { BaseAxios } from "@src/utils/Base_Axios";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "@src/Config/localStorageKeys";
import { setPrivateAccessToken } from "@src/utils/PriveteAxios";

export function AuthProvider({ children }: PropsWithChildren) {
  const [userData, setUserData] = useState<TUserData>();
  const [authStatus, setAuthStatus] = useState<TAuthorizationStatus_Enum>(
    TAuthorizationStatus_Enum.UNAUTHORIZED
  );
  
  function setAuthData(tokens: TAuthTokens) {
    const userData: TUserData = jwtDecode(tokens.access_token);
    setUserData(userData);
    localStorage.setItem(ACCESS_TOKEN, tokens.access_token);
    localStorage.setItem(REFRESH_TOKEN, tokens.refresh_token);
    setPrivateAccessToken(tokens.access_token);
    setAuthStatus(TAuthorizationStatus_Enum.AUTHORIZED);
  }

  async function getNewTokens(refreshToken: string) {
    try {
      const resp = await BaseAxios.post<TAuthTokens>("/auth/update-tokens", {
        refresh_token: refreshToken,
      });
      setAuthData(resp.data);
    } catch (error) {
      logout();
    }
  }

  function logout() {
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
    setUserData(undefined);
    setAuthStatus(TAuthorizationStatus_Enum.UNAUTHORIZED);
  }
  useEffect(() => {
    const refreshToken = localStorage.getItem(REFRESH_TOKEN);
    if (refreshToken) getNewTokens(refreshToken);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        userData,
        authStatus,
        setAuthStatus,
        setAuthData,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
