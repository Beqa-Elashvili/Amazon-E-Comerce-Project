import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { PublicLayout } from "@src/layouts/PublicLayout/setOutlet";
import { AutLayouts } from "@src/layouts/AutLayouts/setOutlet";
import { Divider, Spin } from "antd";

const Home = lazy(() => import("@src/views/Home"));
const Products = lazy(() => import("@src/views/Products"));
const Login = lazy(() => import("@src/views/AuthViews/Login"));
const Register = lazy(() => import("@src/views/AuthViews/Register"));
const CartProductsPage = lazy(() => import("@src/views/CartProductPage"));
const LikedProductsPage = lazy(() => import("@src/views/Wishlist"));
const CategoryPage = lazy(() => import("@src/views/CategoryPage"));

function App() {
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
            <Route path="/Liked_products" element={<LikedProductsPage />} />
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
