import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { ACCESS_TOKEN, STRAPI_MEDIA_URL, STRAPI_PRODUCTS_API_URL } from '../constants/strapi';
import { Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import StarIcon from '@mui/icons-material/Star';
import { addToCart, decCart, incCart } from '../redux/actions/productActions';
import { useDispatch, useSelector } from 'react-redux';
import "../assets/css/product.css"

const ColorButton = styled(Button)(({ theme }) => ({
  color:'#fff',
  backgroundColor: '#001e3c',
  '&:hover': {
    backgroundColor: '#fff',
    color:'#001e3c'
  },
}));

const Product = () => {
    const [singleProduct, setSingleProduct] = useState("")
    const [err, setErr] = useState(null);
    const dispatch = useDispatch();
    const {id} = useParams();

    let { cart, quantity } = useSelector((state) => ({ ...state }));
    console.log("cart", cart)

    const getSingleProducts = async() => {
        try {
            let result = await axios.get(`${STRAPI_PRODUCTS_API_URL}?filters[id][$eq]=${id}&populate=*`, {
                    headers: {
                        'Authorization': `Bearer ${ACCESS_TOKEN}`
                    }
                    })
                    setSingleProduct(result.data)
                    console.log(singleProduct)
        } catch (error) {
            setErr(error.message);
    } }

const addProductToCart = (productId, productTitle, productDescription, productImage, productPrice, categoryId, categoryName, quantity, subTotal ) =>{
    try{
        dispatch(addToCart(productId, productTitle, productDescription, productImage, productPrice, categoryId, categoryName, quantity, subTotal ))
        // alert("Already Added")
    }
    catch(e){
        alert("Error")
    }    
    }


    const goToTop = () => window.scrollTo(0,0)
useEffect(()=>{
    getSingleProducts()
    goToTop()
},[])
  return (
    <Container sx={{ my:5}}>
        {
            singleProduct && 
      <Grid container>
        <Grid item lg={6} md={6} sm={12} xs={12} align={'center'}>
            <div style={{ width:'350px', height:'350px' }} >
                <img src={STRAPI_MEDIA_URL+singleProduct.data[0].attributes.image.data[0].attributes.url} alt="apple-watch-1"
                style={{width:'100%', height:'100%' }}
                />
            </div>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
        <Typography gutterBottom variant="h4" component="div">{singleProduct.data[0].attributes.title}</Typography>
        <Grid>
            <StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/> (1 Customer Review) 
        </Grid>
        <Grid>
        <Typography gutterBottom variant="h5" sx={{mt:3, mb:1}} > {singleProduct.data[0].attributes.price} $ </Typography>
        </Grid>
        <Typography gutterBottom variant="subtitle1" >{singleProduct.data[0].attributes.description}</Typography>
        <Grid  sx={{mt:3}}>
          <span>
            <Link variant="contained" className='buy-now' >Buy Now</Link>
          </span>

        <ColorButton variant="outlined" sx={{ml:2, backgroundColor:'#FFF', color:"#001e3c"}} 
        className="cart-btn"
        onClick={() => addProductToCart(singleProduct.data[0].id, singleProduct.data[0].attributes.title, singleProduct.data[0].attributes.description, STRAPI_MEDIA_URL+singleProduct.data[0].attributes.image.data[0].attributes.url, singleProduct.data[0].attributes.price, singleProduct.data[0].attributes.category.data.id, singleProduct.data[0].attributes.category.data.attributes.name, 1, singleProduct.data[0].attributes.price*1)}
        >Add to Cart</ColorButton>
        </Grid>
        
        </Grid>
    </Grid>
      }
        <Grid sx={{my:5, py:3, height:'800px'}}>

        </Grid>
    </Container>
  )
}

export default Product