import { Routes, Route} from "react-router-dom";
import React from 'react'
import { Store, Home, Sale } from "../pages";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Profile from "../pages/Profile";
import { useSelector } from "react-redux";

const Routers = () => {
  
  let { user } = useSelector((state) => ({ ...state }));
  return (
    <div>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/store" element={<Store />}/>
          <Route path="/sale" element={<Sale />}/>
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/signin" element={<SignIn />}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
    </div>
  )
}

export default Routers

