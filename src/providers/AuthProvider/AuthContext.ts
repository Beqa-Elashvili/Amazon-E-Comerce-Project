import { TAuthTokens } from "@src/@types/TokensTypes";
import { TUserData } from "@src/@types/TuserData";
import { Dispatch, SetStateAction, createContext } from "react";

export enum TAuthorizationStatus_Enum {
  UNAUTHORIZED = "unaauthorized",
  AUTHORIZED = "authorized",
}

type AuthContextValue = {
  userData?: TUserData;
  logout: () => void;
  setAuthData: (e: TAuthTokens) => void;
  authStatus: TAuthorizationStatus_Enum;
  setAuthStatus: Dispatch<SetStateAction<TAuthorizationStatus_Enum>>;
};

export const AuthContext = createContext<AuthContextValue>({
  userData: undefined,
  authStatus: TAuthorizationStatus_Enum.UNAUTHORIZED,
  logout: () => {},
  setAuthData: () => {},
  setAuthStatus: () => {},
});
