import React, { useEffect, useState } from 'react'
import { Box, Grid, Typography } from '@mui/material';
import { Container } from '@mui/system'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
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
import { useParams } from 'react-router-dom';
import { removeFromCart, subTotal, totalAmount, updateQuantity } from '../redux/actions/productActions';


function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

const Cart = () => {
    let [cartData, setCartData] = useState([])
    const dispatch = useDispatch();

    let {cart, totalAmountR}  = useSelector((state) => ({ ...state }));
    // console.log("cart", cart)

    cartData = Object.keys(cart).map(key => cart[key])

const ColorButton = styled(Button)(({ theme }) => ({
    color: '#001e3c',
    backgroundColor: '#001e3c',
    '&:hover': {
        backgroundColor: '#fff',
        color:'#001e3c'
    },
    }));
// console.log(totalAmount)
useEffect(()=>{
    let result = cart.map(item => item.subTotal).reduce((prev, next) => prev + next);
    
    // console.log(result)
    dispatch(totalAmount(result.toFixed(2)))
},[cart])

return (
    <Grid sx={{ my:5}}>
        <Container>
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
                    {!cartData ? console.log("Wait") : cartData.map((c, i) => (
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
                                <RemoveCircleOutlineOutlinedIcon onClick={() => dispatch(updateQuantity(c.productId, c.quantity-1))} sx={{fontSize:'22px', cursor:'pointer'}}/>{c.quantity}&nbsp;
                                <AddCircleOutlineIcon            onClick={() => dispatch(updateQuantity(c.productId, c.quantity+1))} sx={{fontSize:'22px', cursor:'pointer'}}/>
                            </Typography>
                        </TableCell>

                        <TableCell> {c.subTotal = c.productPrice*c.quantity}  $</TableCell>
                        
                        <TableCell><DeleteIcon sx={{cursor:'pointer'}} onClick= {()=> dispatch(removeFromCart(c.productId))}/></TableCell>
                        </TableRow>
                        
                    ))}
                    {/* {() => calculateTotal(subTotal)} */}
                     <TableRow align="right">
                        <TableCell rowSpan={4} />
                        <TableCell colSpan={1}>Subtotal</TableCell>
                        <TableCell><b>Total</b> {totalAmountR} $</TableCell>
                    </TableRow>

                    </TableBody>
                </Table>
                </TableContainer>     
                </Box>
            </Grid>
            
        </Container>
    </Grid>
  )
}

export default Cart