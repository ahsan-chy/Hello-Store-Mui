import React from 'react'
import { Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { Link } from 'react-router-dom';
import "../assets/css/orderconfirm.css"

const OrderConfirm = () => {
//   var today = new Date();
//   var dd = String(today.getDate()).padStart(2, '0');
// var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
// var yyyy = today.getFullYear();
// var hr = today.getHours()
// var min = today.getMinutes()
//   console.log(hr, min);


  return (
    <Grid sx={{ my:10}}>
        <Container className='main-container'>
            <Grid sx={{ textAlign:"center", boxShadow: 2, borderRadius:5, padding:5, width:'410px'}}>
                    <img src="https://cdn-icons-png.flaticon.com/512/5290/5290058.png" alt="Cart" width={100} />
                    
                    <Typography variant='h4' sx={{color:"#001e3c", textAlign:"center", mt:4, mb:1}}>Order Confirmed</Typography>
                    <Typography variant='subtitle1' sx={{color:"#001e3c", textAlign:"center"}}>Thanks for Your Order</Typography>
                    <div style={{marginTop:15, display:'flex', justifyContent:'center'}}>
                        <Link to="/profile/orderdetails" type='submit' className='proceed-btn'>Go to Orders</Link>    
                    </div> 
                </Grid> 
        </Container>
    </Grid>
  )
}

export default OrderConfirm