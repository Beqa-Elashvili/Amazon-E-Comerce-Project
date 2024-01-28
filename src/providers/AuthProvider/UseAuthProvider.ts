import { useContext } from "react";
import { AuthContext } from "./AuthContext";

export function useAuthPRovider() {
    return useContext(AuthContext)
}