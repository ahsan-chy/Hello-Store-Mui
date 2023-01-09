import { Routes, Route} from "react-router-dom";
import React from 'react'
import { Store, Home } from "../pages";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Profile from "../pages/Profile";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import Product from "../pages/Product";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import OrderConfirm from "../pages/OrderConfirm";
import OrderDetails from "../pages/OrderDetails";

const Routers = () => {
  
  let { user } = useSelector((state) => ({ ...state }));
  return (
    <div>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/store" element={<Store />}/>
          <Route path="/orderconfirm" element={<OrderConfirm />}/>
          <Route path="/store/:id" element={<Product />} />
          <Route path="/checkout" element={<Checkout />}/>
          <Route path="/register" element={<SignUp />}/>
          <Route path="/login" element={<SignIn />}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/orderdetails" element={<OrderDetails />}/>
          
          <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default Routers

