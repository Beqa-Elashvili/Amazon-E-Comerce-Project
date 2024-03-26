import { CheckoutHeader } from "./CheckoutHeader";
import { Outlet } from "react-router-dom";

export function CheckoutLayout() {
  return (
    <div>
      <CheckoutHeader />
      <Outlet />
    </div>
  );
}
