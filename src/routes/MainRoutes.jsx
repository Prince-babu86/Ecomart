import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import ViewProduct from "../pages/ViewProduct";
import PageNotFound from "../pages/PageNotFound";
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";
import Contact from "../pages/Contact";
import Profile from "../pages/Profile";
import SearchItems from "../pages/SearchItems";
import Payment from "../pages/Payment";
import OrderSuccess from "../pages/OrderSuccess";
import Orders from "../components/profile/Orders";
import Cart from "../components/Cart";
import WhisList from "../components/profile/WhisList";
import MyNotifications from "../components/profile/MyNotifications";
const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/About" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<ViewProduct />} />
        <Route path="/page-not-found" element={<PageNotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id/check-out" element={<Payment />} />
        <Route
          path="/product/:id/check-out/:id/order-sucessfully"
          element={<OrderSuccess />}
        />
        <Route path="/search-query/:query" element={<SearchItems />} />
        <Route path="/notifications" element={<MyNotifications />} />
        <Route path="/profile/*" element={<Profile />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/whislist" element={<WhisList />} />
        <Route path="*" element={<PageNotFound/>} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
