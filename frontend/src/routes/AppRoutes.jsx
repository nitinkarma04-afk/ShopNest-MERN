import { Routes, Route } from "react-router-dom";

import Home from "../pages/home/Home";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Cart from "../pages/Cart/Cart";
import Orders from "../pages/Orders/Orders";
import ProductPage from "../pages/Product/ProductPage";
import NotFound from "../pages/NotFound/NotFound";
import ProtectedRoute from "../components/auth/ProtectedRoute";

import Admin from "../pages/Admin/Admin";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
     <Route
  path="/cart"
  element={
    <ProtectedRoute>
      <Cart />
    </ProtectedRoute>
  }
/>
      <Route
  path="/orders"
  element={
    <ProtectedRoute>
      <Orders />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin"
  element={
    <ProtectedRoute>
      <Admin />
    </ProtectedRoute>
  }
/>
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;