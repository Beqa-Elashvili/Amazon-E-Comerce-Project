import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { PublicLayout } from "@src/layouts/PublicLayout";
import { AutLayouts } from "@src/layouts/AutLayouts";

const Home = lazy(() => import("@src/views/Home"));
const Products = lazy(() => import("@src/views/Products"));
const Login = lazy(() => import("@src/views/AuthViews/Login"));
const Register = lazy(() => import("@src/views/AuthViews/Register"));

function App() {
  return (
    <div>
      <Suspense fallback={<div>loading</div>}>
        <Routes>
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
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
