import { Outlet } from "react-router-dom";
import { AuthHeader } from "../AuthHeader/AuthHeader";
import { AuthFooter } from "../AuthFooter/AuthFooter";

export function AutLayouts() {
  return (
    <div>
      <AuthHeader />
      <Outlet />
      <AuthFooter />
    </div>
  );
}
