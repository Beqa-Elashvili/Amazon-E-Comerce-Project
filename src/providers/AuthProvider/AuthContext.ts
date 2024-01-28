import { TAuthTokens } from "@src/@types/TokensTypes";
import { Dispatch, SetStateAction, createContext } from "react";

export enum TAuthorizationStatus_Enum {
  UNAUTHORIZED = "unaauthorized",
  AUTHORIZED = "authorized",
}

type AuthContextValue = {
  setAuthData: (e: TAuthTokens) => void;
  authStatus: TAuthorizationStatus_Enum;
  setAuthStatus: Dispatch<SetStateAction<TAuthorizationStatus_Enum>>;
};

export const AuthContext = createContext<AuthContextValue>({
  authStatus: TAuthorizationStatus_Enum.UNAUTHORIZED,
  setAuthData: () => {},
  setAuthStatus: () => {},
});
