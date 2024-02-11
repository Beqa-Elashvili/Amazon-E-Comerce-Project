import { useAuthPRovider } from "@src/providers/AuthProvider";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function useHandleAuthstatus() {
  const { authStatus } = useAuthPRovider();
  const navigate = useNavigate();
  function HandleAuthstatus() {
    if (authStatus === "authorized") {
      navigate("/cartProducts");
    }
    if (authStatus === "unauthorized") {
      navigate("/Login");
    }
  }
  useEffect(() => {
    if (authStatus === "unauthorized") {
      navigate("/");
    }
  }, [authStatus]);

  return { HandleAuthstatus };
}
