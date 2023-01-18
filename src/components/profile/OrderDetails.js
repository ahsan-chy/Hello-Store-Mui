import * as React from 'react';
import { Container, Typography } from '@mui/material';
import Button from '../Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import IconButton from '@mui/material/IconButton';
import ForwardIcon from '@mui/icons-material/Forward';
import "../../assets/css/orderDetails.css"
import { useEffect } from 'react';
import { STRAPI_API_URL, ACCESS_TOKEN  } from '../../constants/strapi';
import { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const OrderDetails = () => {  
  const [order, setOrder] = useState([])
  let { user } = useSelector((state) => ({ ...state }));
  const userid = user.userData.id;
//   console.log(userid)

    const getOrderDetails = async() => {
        try {
            let result = await axios.get(`${STRAPI_API_URL}/Orders?filters[Customer][id][$eq]=${userid}&populate=*`, {
                    headers: {
                        'Authorization': `Bearer ${ACCESS_TOKEN}`
                    }
                    })
                    setOrder(result.data.data)
        } catch (error) {
            console.log(error.message);
    } }
    
useEffect(()=>{
    getOrderDetails()
  console.log("order", order)
},[])
  return (
    <>
     <Box>
        <Typography variant='h5' sx={{color:"#001e3c", textAlign:"left"}}>Order Details 🛒</Typography>
            <Box sx={{ flexGrow: 1, mt:3 }}>
                {/* Table Head */}
                <Grid container sx={{mb:2}}>
                    <Grid lg={2} md={2} sx={{p:1}}>
                        <Typography variant='subtitle2' sx={{color:"#001e3c", textAlign:"left", fontWeight:'600'}}
                            >#OrderID</Typography>
                    </Grid>
                    <Grid lg={3} md={3} sx={{p:1}}>
                    <Typography variant='subtitle2' sx={{color:"#001e3c", textAlign:"left", fontWeight:'600'}}
                            >Status</Typography>
                    </Grid>
                    <Grid lg={3} md={3} sx={{p:1}}>
                    <Typography variant='subtitle2' sx={{color:"#001e3c", textAlign:"left", fontWeight:'600'}}
                            >Date Purchase</Typography>
                    </Grid>
                    <Grid lg={3} md={3} sx={{p:1}}>
                    <Typography variant='subtitle2' sx={{color:"#001e3c", textAlign:"left", fontWeight:'600'}}
                            >Total</Typography>
                    </Grid>
                    <Grid lg={1} md={1} sx={{p:1}}>
                    <Typography variant='subtitle2' sx={{color:"#001e3c", textAlign:"left", fontWeight:'600'}}
                            ></Typography>
                    </Grid>
                </Grid>
                {/* Table Data */}
                {order && order.map((o, i)=> (
                <Grid container sx={{boxShadow:1, borderRadius:2, my:2}} className="row-card" key={i}>
                    <Grid lg={2} md={2} sx={{p:1}}>
                    {o.id}
                    </Grid>
                    <Grid lg={3} md={3} sx={{p:1}}>
                    {/* <Button variant="contained" color="success" sx={{borderRadius:5}} label={o.attributes.orderStatus} /> */}
                    <Button variant="contained" color={o.attributes.orderStatus === "pending" ? "primary" : o.attributes.orderStatus === "accepted" ? "success": o.attributes.orderStatus === "completed" ? "success" :o.attributes.orderStatus === "cancelled" ? "error" : "secondary" } sx={{borderRadius:5}} label={o.attributes.orderStatus} />
                    </Grid>
                    <Grid lg={3} md={3} sx={{p:1}}>
                    {o.attributes.date.slice(0,10).split('-').reverse().join('-')}
                    </Grid>
                    <Grid lg={3} md={3} sx={{p:1}}>
                    {o.attributes.totalAmount} $
                    </Grid>
                    <Grid lg={1} md={1} sx={{p:1}}>
                    <IconButton aria-label="delete" size="large" color="success">
                        <ForwardIcon />
                    </IconButton>
                    </Grid>
                </Grid>
                ))
                }
                {/* <Grid container sx={{boxShadow:1, borderRadius:2, my:2}} className="row-card">
                    <Grid lg={2} md={2} sx={{p:1}}>
                    1234
                    </Grid>
                    <Grid lg={3} md={3} sx={{p:1}}>
                   <Button variant="contained" color="secondary" sx={{borderRadius:5}} label={"Processing"} />
                    </Grid>
                    <Grid lg={3} md={3} sx={{p:1}}>
                    Jan 05, 2023
                    </Grid>
                    <Grid lg={3} md={3} sx={{p:1}}>
                    200$
                    </Grid>
                    <Grid lg={1} md={1} sx={{p:1}}>
                    <IconButton aria-label="delete" size="large" color="success">
                        <ForwardIcon />
                    </IconButton>
                    </Grid>
                </Grid>
                <Grid container sx={{boxShadow:1, borderRadius:2, my:2}} className="row-card">
                    <Grid lg={2} md={2} sx={{p:1}}>
                    1234
                    </Grid>
                    <Grid lg={3} md={3} sx={{p:1}}>
                    <Button variant="contained" color="primary" sx={{borderRadius:5}} label={"Completed"} />
                    </Grid>
                    <Grid lg={3} md={3} sx={{p:1}}>
                    Jan 05, 2023
                    </Grid>
                    <Grid lg={3} md={3} sx={{p:1}}>
                    200$
                    </Grid>
                    <Grid lg={1} md={1} sx={{p:1}}>
                    <IconButton aria-label="delete" size="large" color="success">
                        <ForwardIcon />
                    </IconButton>
                    </Grid>
                </Grid> */}
       </Box>
    </Box>            
    </>
  )
}

export default OrderDetails
