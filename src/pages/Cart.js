import React, { useEffect, useState } from 'react'
import { Box, Grid, Typography } from '@mui/material';
import { Container } from '@mui/system'
import Button from '../components/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, totalAmount, updateQuantity } from '../redux/actions/productActions';
import Link  from '../components/Link';
import "../assets/css/cart.css"
import Breadcrumb from '../components/Breadcrumb';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const Cart = ({ label, icon, to, type, onClick, sx, style,className }) => {
    let [cartData, setCartData] = useState([])
    const dispatch = useDispatch();
    const navigate = useNavigate()

    let {user, cart, totalAmountR}  = useSelector((state) => ({ ...state }));
    // console.log("cart", cart)

    cartData = Object.keys(cart).map(key => cart[key])

    let processToCheckout = () => {
        if (user !== null) {
            navigate("/checkout")
        }
        else{
            toast.error('Login First Please', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        }
    }

useEffect(()=>{
    let result = cart.map(item => item.subTotal).reduce((prev, next) => {return prev + next}, 0);
    
    // console.log(result)
    dispatch(totalAmount(result.toFixed(2)))
},[cart])

return (
    <>
    <Breadcrumb pagetitle={"Cart"}/>
    <Grid sx={{ my:5}}>
        <Container>
            {cart.length == 0 ? 
            <Grid sx={{textAlign:"center", marginBottom:12}}>
                <img src="https://cdn-icons-png.flaticon.com/512/3737/3737151.png" alt="Cart" width={100} />
                
                <Typography variant='h4' sx={{color:"#001e3c", textAlign:"center", mt:4, mb:1}}>OHH!!! Cart is Empty</Typography>
                <Typography variant='subtitle1' sx={{color:"#001e3c", textAlign:"center"}}>Add Some products in cart</Typography>
                <div style={{marginTop:15, display:'flex', justifyContent:'center'}}>

                    <Link label={'Go Back to Shop 🛒'} to="/store" type={'submit'} className='proceed-btn' />  

                    {/* <Link to="/store" type='submit' className='proceed-btn'>Go Back to Shop</Link>     */}
                </div> 
            </Grid>  
            :
            <Grid item lg={12} md={6} sm={12} xs={12}>
            <Box  sx={{
            borderRadius: 1,
            p: 2,
            minWidth: 300,
            boxShadow: 2,
            mr:2
            }}
            >
               <TableContainer >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell sx={{fontWeight:600}} >Image</TableCell>
                        <TableCell sx={{fontWeight:600}}>Product Name</TableCell>
                        <TableCell sx={{fontWeight:600}}>Product Price</TableCell>
                        <TableCell sx={{fontWeight:600}}>Product Category</TableCell>
                        <TableCell sx={{fontWeight:600}}>Quantity</TableCell>
                        <TableCell sx={{fontWeight:600}}>Sub Total </TableCell>
                        <TableCell sx={{fontWeight:600}}> </TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {!cartData ? alert("Please add products") : cartData.map((c, i) => (
                        <TableRow
                        key={i}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell>
                            <div style={{ width:'65px', height:'100%' }}>
                                <img src={c.productImage} alt="product image"
                                style={{width:'100%', height:'100%' }} />
                            </div>
                        </TableCell>
                        <TableCell component="th" scope="row">{c.productTitle}</TableCell>
                        <TableCell>{c.productPrice} $</TableCell>
                        <TableCell>{c.categoryName}</TableCell>
                        <TableCell>
                            <Typography  sx={{fontSize:'18px'}}>
                                <Button disabled={c.quantity < 2 ? true : false}>
                                    <RemoveCircleOutlineOutlinedIcon  onClick={() => dispatch(updateQuantity(c.productId, c.quantity-1))} sx={{fontSize:'22px', cursor:'pointer'}} />
                                </Button >
                                {c.quantity}
                                <Button>
                                    <AddCircleOutlineIcon onClick={() => dispatch(updateQuantity(c.productId, c.quantity+1))} sx={{fontSize:'22px', cursor:'pointer'}}/>
                                </Button>
                            </Typography>
                        </TableCell>

                        <TableCell> {c.subTotal = c.productPrice*c.quantity}  $</TableCell>
                        
                        <TableCell><DeleteIcon sx={{cursor:'pointer'}} onClick= {()=> dispatch(removeFromCart(c.productId))}/></TableCell>
                        </TableRow>
                    ))}
                    {/* {() => calculateTotal(subTotal)} */}
                     <TableRow align="right">
                        <TableCell rowSpan={4} />
                        <TableCell rowSpan={4} />
                        <TableCell rowSpan={4} />
                        <TableCell rowSpan={4} />
                        <TableCell colSpan={1}>Sub<b>Total:</b></TableCell>
                        <TableCell> {totalAmountR} $</TableCell>
                    </TableRow>

                    </TableBody>
                </Table>
                </TableContainer> 
                <div style={{marginTop:25, display:'flex', justifyContent:'end'}}>
                    <Button 
                        variant="contained" 
                        className="proceed-btn"
                        label={"Process To Checkout"}
                        onClick={processToCheckout}
                        />
                </div>
                </Box>
            </Grid>
            }
        </Container>
    </Grid>
    </>
  )
}

export default Cart