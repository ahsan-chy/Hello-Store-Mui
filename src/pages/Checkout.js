import React from 'react'
import { Button, Container, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { Link, useNavigate } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import '../assets/css/checkout.css'
import Breadcrumb from '../components/Breadcrumb';
import axios from 'axios';
import { useState } from 'react';
import { ACCESS_TOKEN } from '../constants/strapi';

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
var hr = today.getHours()
var min = today.getMinutes()
var sec = today.getSeconds()
// today = yyyy + '-' + mm + '-' + dd +"T"+ hr +  ":" + min + ":" + sec;
today = `${yyyy}-${mm}-${dd}T${hr}:${min}:${sec}`;

// console.log(today);


const StyledFormControlLabel = styled((props) => <FormControlLabel {...props} />)(
    ({ theme, checked }) => ({
      '.MuiFormControlLabel-label': checked && {
        color: theme.palette.primary.main,
      },
    }),
  );
  
  function MyFormControlLabel(props) {
    const radioGroup = useRadioGroup();
  
    let checked = false;
  
    if (radioGroup) {
      checked = radioGroup.value === props.value;
    }
  
    return <StyledFormControlLabel checked={checked} {...props} />;
  }
  
  MyFormControlLabel.propTypes = {
    value: PropTypes.any,
  };
  
const Checkout = () => {
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [deliveryAddress, setDeliveryAddress] = useState("")
    const [additionalNote, setAdditionalNote] = useState("")
    const navigate = useNavigate()


    let {cart, user, totalAmountR}  = useSelector((state) => ({ ...state }));
    // console.log("cart", cart);
    // console.log("user",user);
    // console.log("totalAmountR",totalAmountR);


    const cartData = Object.keys(cart).map(key => cart[key])
    // console.log("Cart Data", cartData[0].productId)
    // console.log("Cart Quantity", cartData[0].quantity)
    // console.log("Cart SubTotal", cartData[0].subTotal)
    // console.log("Cart categoryId", cartData[0].categoryId)
const cartObject = {"data":{
    "Customer":{
        "id":user.userData.id
    } ,
    "productDetails": [
    {
        "productDet": {"id": cartData[0].productId},
        "quantity": cartData[0].quantity,
        "subTotal": cartData[0].subTotal,
        "categoryDet": { "id":cartData[0].categoryId}
    },
    {
        "productDet": {"id": cartData[1].productId},
        "quantity": cartData[1].quantity,
        "subTotal": cartData[1].subTotal,
        "categoryDet": { "id":cartData[1].categoryId}
    },
    
    ],
    "shippingDetails": {
            fullName: fullName,
            email: email,
            phone: phone,
            deliveryAddress: deliveryAddress,
            additionalNote: additionalNote
    },
    "totalAmount":totalAmountR,
    "date": today
}}
const confirmOrder = (e) => {
    toast.success('Order Placed Successfully', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
        });
    e.preventDefault()
    try{
        axios.post('http://localhost:1337/api/orders', 
        cartObject,
            {
            headers: {
                Authorization: `Bearer ${ACCESS_TOKEN}`
            } }
            
       )
    }
    catch(error){
        console.log("Error")
    }
    console.log("Order Confirmed")
    navigate("/orderconfirm")
}
return (
    <>
    <Breadcrumb pagetitle={"Checkout"}/>
    <Box sx={{mx:5, my:4}}>
        <Container>
        <Typography variant='h4' sx={{my:2, color:"#001e3c", textAlign:"center"}}>Checkout</Typography>
        <Grid container  spacing={4}>
            <Grid lg={7} md={6} sm={12} xs={12} my={2}>
            <Box  sx={{
                borderRadius: 1,
                p: 4,
                minWidth: 300,
                boxShadow: 2,
            }}
                >
            <Typography variant='h6' sx={{color:"#001e3c", textAlign:"center"}}>Shipping Details</Typography>
                <form onSubmit={confirmOrder}>
                    <TextField type="text" fullWidth 
                    name="fullName"
                    value={fullName}
                    onChange={e => setFullName(e.target.value)}
                    label="Full Name"  size="small" variant="standard"  sx={{my:1}}/>
                    
                    <TextField fullWidth type="text" 
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    label="Email"  size="small" variant="standard"  sx={{my:1}}/>
                    
                    <TextField fullWidth type="text" 
                    name="phone"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    label="Phone"  size="small" variant="standard"  sx={{my:1}}/>

                    <TextField fullWidth type="text" 
                    name="deliveryAddress"
                    value={deliveryAddress}
                    onChange={e => setDeliveryAddress(e.target.value)}
                     label="Delivery Address"  size="small" variant="standard"  sx={{my:1}}/>

                    <TextField
                        variant="standard"
                        name="additionalNote"
                        value={additionalNote}
                        onChange={e => setAdditionalNote(e.target.value)}
                        label="Additional Note"
                        fullWidth
                        multiline
                        sx={{my:1, mb:5}}
                        rows={2}
                        size="small"
                        />
                        <div className='combine-btn'>
                            <Link to="/cart" type='submit' className='back-btn' >Go Back to Cart</Link>
                            <Button type="submit" className='order-btn' sx={{ml:2}}>Place Order</Button>
                        </div>
                </form>
                </Box>
            </Grid>
            <Grid lg={5} md={6} sm={12} xs={12} my={2}>
            <Box  sx={{
                borderRadius: 1,
                p: 2,
                minWidth: 300,
                boxShadow: 2,
                bgcolor:"#f8f9fa"
                }}
                >
                <Typography variant='h6' sx={{color:"#001e3c", textAlign:"center"}}>Your Order</Typography>
                <TableContainer component={Paper}  sx={{ px:2, mt:3, pb:2  }}>
                    <Table aria-label="caption table">
                    <caption>We Offer within 1 Day Shipping service</caption>
                    <TableHead>
                        <TableRow>
                            <TableCell><b>PRODUCTS</b></TableCell>
                            <TableCell align="right"><b>SubTotal</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {!cartData ? console.log("Wait") : cartData.map((c, i) => (
                        <TableRow key={i}>
                            <TableCell scope="row">{c.productTitle} <b>x {c.quantity}</b></TableCell>
                            <TableCell scope="row" align='right'>{c.subTotal} $</TableCell>
                        </TableRow>
                    ))}

                    <TableRow>
                            <TableCell><b>Total:</b></TableCell>
                            <TableCell align="right"><b>{totalAmountR} $</b></TableCell>
                        </TableRow>
                    </TableBody>

                    </Table>
                <RadioGroup name="use-radio-group" defaultValue="Cash on Delivery" sx={{pl:2}}>
                    <MyFormControlLabel value="Cash on Delivery" label="Cash on Delivery" control={<Radio />} />
                    <MyFormControlLabel value="Debit Card" label="Debit Card" control={<Radio />} />
                </RadioGroup>
                </TableContainer>
                </Box>
            </Grid>
        </Grid>
    </Container>
    </Box>
    </>
  )
}

export default Checkout