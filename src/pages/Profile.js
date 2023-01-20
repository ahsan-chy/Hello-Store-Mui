// import { Box, Container, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import 'react-toastify/dist/ReactToastify.css';
import Breadcrumb from '../components/Breadcrumb';
import { ACCESS_TOKEN, STRAPI_API_URL } from '../constants/strapi';
import SideBar from '../components/profile/SideBar';
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux';
import axios from 'axios';

const Profile = () => {
  const [loginUser, setLoginUser] = useState("")

  let { user } = useSelector((state) => ({ ...state }));
  const userid = user.userData.id;
  console.log(userid)
  const getSingleUser = async() => {
    try {
        let result = await axios.get(`${STRAPI_API_URL}/users?filters[id][$eq]=${userid}&populate=*`, {
                headers: {
                    'Authorization': `Bearer ${ACCESS_TOKEN}`
                }
                })
                setLoginUser(result)
                // console.log(result.data[0])
    } catch (error) {
        console.log(error.message);
} }
useEffect(()=>{
  getSingleUser()
  console.log(loginUser.id)

},[])

  return (
    <>
      <Breadcrumb pagetitle={"Profile"}/>
      <Grid container spacing={2} px={3} my={2} mb={6}>
        <Grid item lg={3} md={3} sm={12} xs={12}>
          <SideBar user={user} loginUser={loginUser}/>
        </Grid>
        <Grid item lg={9} md={9} sm={12} xs={12}>
          <Outlet loginUser={loginUser} userid={userid}/>
          
        </Grid>
    </Grid>
    </>
  )
}

export default Profile