import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer";
export function PublicLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
