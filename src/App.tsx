import { lazy, Suspense, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { PublicLayout } from "@src/layouts/PublicLayout/setOutlet";
import { AutLayouts } from "@src/layouts/AutLayouts/setOutlet";
import { Spin } from "antd";
import { useAuthProvider } from "./providers/AuthProvider";

const Home = lazy(() => import("@src/views/Home"));
const ProfilePage = lazy(() => import("@src/views/ProfilePage"));
const Products = lazy(() => import("@src/views/ProductsPage"));
const Login = lazy(() => import("@src/views/AuthViews/Login"));
const Register = lazy(() => import("@src/views/AuthViews/Register"));
const CartProductsPage = lazy(() => import("@src/views/CartProductPage"));
const LikedProductsPage = lazy(() => import("@src/views/WishlistPage"));
const CategoryPage = lazy(() => import("@src/views/CategoryPage"));

function App() {
  const { authStatus } = useAuthProvider();
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);

  useEffect(() => {
    if (authStatus === "authorized") {
      setIsAuthorized(true);
    } else {
      setIsAuthorized(false);
    }
  }, [authStatus]);

  return (
    <div>
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen">
            <div className="inline-flex rounded-xl p-2 items-center">
              <img
                className="h-20 w-60"
                src="./Images/Amazon_logo(Black).png"
                alt="amazon-logo"
              />
              <Spin className="height-40 flex justify-center align-center" />
            </div>
          </div>
        }
      >
        <Routes>
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/CartProducts" element={<CartProductsPage />} />
            {authStatus === "authorized" && (
              <>
                <Route path="/Liked_products" element={<LikedProductsPage />} />
                <Route path="/Profile_Page" element={<ProfilePage />} />
              </>
            )}
            <Route path="/Category_Products_Page" element={<CategoryPage />} />
          </Route>
          <Route element={<AutLayouts />}>
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
