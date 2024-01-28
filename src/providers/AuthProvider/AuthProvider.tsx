import { PropsWithChildren, useState } from "react";
import { AuthContext, TAuthorizationStatus_Enum } from "./AuthContext";
import { TAuthTokens } from "@src/@types/TokensTypes";
import { TUserData } from "@src/@types/TuserData";
import { jwtDecode } from "jwt-decode";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "@src/Config/localStorageKeys";
import { setPrivateAccessToken } from "@src/utils/PriveteAxios";

export function AuthProvider({ children }: PropsWithChildren) {
  const [userData, setUserData] = useState<TUserData>();
  const [authStatus, setAuthStatus] = useState<TAuthorizationStatus_Enum>(
    TAuthorizationStatus_Enum.UNAUTHORIZED
  );
  console.log(userData);

  async function setAuthData(tokens: TAuthTokens) {
    const userData: TUserData = jwtDecode(tokens.access_token);
    setUserData(userData);
    localStorage.setItem(ACCESS_TOKEN, tokens.access_token);
    localStorage.setItem(REFRESH_TOKEN, tokens.refresh_token);
    setPrivateAccessToken(tokens.access_token);
    setAuthStatus(TAuthorizationStatus_Enum.AUTHORIZED);
  }

  return (
    <AuthContext.Provider
      value={{
        authStatus,
        setAuthStatus,
        setAuthData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
