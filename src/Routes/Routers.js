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
import OrderDetails from "../components/profile/OrderDetails";
import Dashboard from "../components/profile/Dashboard";
import ProfileUpdate from "../components/profile/ProfileUpdate";

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
          <Route path="/cart" element={<Cart />}/>
          
          {/* User Dashboard */}
          <Route path="/profile/" element={<Profile />}>
            <Route path="dashboard" element={<Dashboard />}/>
            <Route path="orderdetails" element={<OrderDetails />}/>
            <Route path="updateprofile" element={<ProfileUpdate />}/>
          </Route>


          <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default Routers

