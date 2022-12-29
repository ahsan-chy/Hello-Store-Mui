import { Routes, Route} from "react-router-dom";
import React from 'react'
import { Store, Home, Sale } from "../pages";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Profile from "../pages/Profile";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import ProductList from "../pages/ProductList";
import Product from "../pages/Product";
import Cart from "../pages/Cart";

const Routers = () => {
  
  let { user } = useSelector((state) => ({ ...state }));
  return (
    <div>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/store" element={<Store />}/>
          <Route path="/store/:id" element={<Product />} />
          <Route path="/sale" element={<Sale />}/>
          <Route path="/register" element={<SignUp />}/>
          <Route path="/login" element={<SignIn />}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/cart" element={<Cart />}/>
          
          <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default Routers

