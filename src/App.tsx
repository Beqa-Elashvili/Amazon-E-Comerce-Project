import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { PublicLayout } from "@src/layouts/PublicLayout/setOutlet";
import { AutLayouts } from "@src/layouts/AutLayouts/setOutlet";
import { Spin } from "antd";
import { useAuthProvider } from "./providers/AuthProvider";
import { CheckoutLayout } from "./layouts/CheckoutLayout/setOutlat";

const Home = lazy(() => import("@src/views/Home"));
const ProfilePage = lazy(() => import("@src/views/ProfilePage"));
const Products = lazy(() => import("@src/views/ProductsPage"));
const Login = lazy(() => import("@src/views/AuthViews/Login"));
const Register = lazy(() => import("@src/views/AuthViews/Register"));
const CartProductsPage = lazy(() => import("@src/views/CartProductPage"));
const LikedProductsPage = lazy(() => import("@src/views/WishlistPage"));
const OneProductPage = lazy(() => import("@src/views/OneProductPage"));
const CategoryPage = lazy(() => import("@src/views/CategoryPage"));
const ChangeUserInfo = lazy(() => import("@src/views/ChangeUserInfo"));
const PurchasePage = lazy(() => import("@src/views/PurchasePage"));

function App() {
  const { authStatus } = useAuthProvider();

  return (
    <div>
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen">
            <div className="inline-flex rounded-xl p-2 items-center">
              <img
                className="h-20 w-60"
                src="/Images/Amazon_logo(Black).png"
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
            <Route
              path="/Category_Products_Page/:categoryName"
              element={<CategoryPage />}
            />
            <Route
              path="/OneProductPage/:id/:category"
              element={<OneProductPage />}
            />
            {authStatus === "authorized" && (
              <>
                <Route path="/Liked_products" element={<LikedProductsPage />} />
                <Route path="/Profile_Page" element={<ProfilePage />} />
              </>
            )}
          </Route>
          <Route element={<CheckoutLayout />}>
            <Route
              path="/Buy/Checkout/:price/:caunt"
              element={<PurchasePage />}
            />
          </Route>
          <Route element={<AutLayouts />}>
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            {authStatus === "authorized" && (
              <Route path="/User&Info&Change" element={<ChangeUserInfo />} />
            )}
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
