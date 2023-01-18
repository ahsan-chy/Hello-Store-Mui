import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, CardActions, Grid } from '@mui/material';
import {products} from "../db/data"
import { useEffect } from 'react';
import axios from 'axios';
import { STRAPI_API_URL, STRAPI_MEDIA_URL, ACCESS_TOKEN, STRAPI_PRODUCTS_API_URL } from '../constants/strapi';
import { Link } from 'react-router-dom';
import "../assets/css/cardbtn.css"
import { useLayoutEffect } from 'react';

const ProductCards = ({cat}) => {
    const [products, setProducts] = useState([])
    const [product, setProduct] = useState([])

    const [err, setErr] = useState(null);

    const getAllProducts = async() => {
        try {
            let result = await axios.get(`${STRAPI_API_URL}/products?populate=*`, {
                    headers: {
                        'Authorization': `Bearer ${ACCESS_TOKEN}`
                    }
                    })
                    setProduct(result.data.data)
        } catch (error) {
            setErr(error.message);
    } }
 

    const getProducts = async(cat, cat1, cat2, cat3) => {
        try {
            let result = await axios.get(`${STRAPI_PRODUCTS_API_URL}?filters[category][name][$eq]=${cat}&filters[category][name][$eq]=${cat1}&filters[category][name][$eq]=${cat2}&filters[category][name][$eq]=${cat3}&populate=*`, {
                    headers: {
                        'Authorization': `Bearer ${ACCESS_TOKEN}`
                    }
                    })
                    setProducts(result.data.data)
                    // console.log(cat)
        } catch (error) {
            setErr(error.message);
    } }
useLayoutEffect(()=>{
    getAllProducts()
},[])
useEffect(()=>{
    getProducts(cat[0],cat[1],cat[2],cat[3])
    // console.log(products)
},[cat])
  return (
    <Box>
      {/* <Typography variant='h4' sx={{color:"#001e3c", my:3, textAlign:"center"}}>Store</Typography> */}
                        
      {/* <div className='row' style={{display:'flex', justifyContent:"center"}}> */}
      <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 2, lg:2 }}>
      {cat == "" ?
        product.map(p => (
            <Grid item  lg={3} md={4} sm={6} xs={12} key={p.id}>
                  <Card sx={{ height:"400px" }} align="center">
                  <CardActionArea>
                  <Link to ={`/store/${p.id}`}>
                        <div style={{width:'210px', height:'100%'}}>
                            <CardMedia
                            sx={{
                            width: "100%",
                            height: 'auto'
                            }}
                            component="img"
                            image={STRAPI_MEDIA_URL+p.attributes.image.data[0].attributes.url}
                            alt="green iguana"
                            />
                        </div>
                      </Link>  
                      <CardContent>
                      <Typography gutterBottom variant="h6" component="div">
                          {/* {p.title.split(/\s+/).slice(0, 4).join(" ")} */}
                          {p.attributes.title.split(/\s+/).slice(0, 4).join(" ")}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                          {p.attributes.price}$
                      </Typography>
                      </CardContent>
                  </CardActionArea>
                  <CardActions sx={{justifyContent:'center', mt:2}}>
                  <Link className="buy-btn" to ={`/store/${p.id}`}>View Product</Link>
                  </CardActions>
                  </Card>
              </Grid>
        ))
      : products.map(p => (
          <Grid item  lg={3} md={4} sm={6} xs={12} key={p.id}>
                <Card sx={{ height:"400px" }} align="center">
                <CardActionArea>
                <Link to ={`/store/${p.id}`}>
                        <div style={{width:'210px', height:'100%'}}>
                            <CardMedia
                            sx={{
                            width: "100%",
                            height: 'auto'
                            }}
                            component="img"
                            image={STRAPI_MEDIA_URL+p.attributes.image.data[0].attributes.url}
                            alt="green iguana"
                            />
                        </div>
                    </Link>
                    <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {/* {p.title.split(/\s+/).slice(0, 4).join(" ")} */}
                        {p.attributes.title.split(/\s+/).slice(0, 4).join(" ")}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {p.attributes.price}$
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions sx={{justifyContent:'center', mt:2}}>
                  <Link className="buy-btn" to ={`/store/${p.id}`}>View Product</Link>
                  </CardActions>
                </Card>
            </Grid>
      ))
    }
      </Grid></Box>
    
      {/* </div> */}
    </Box>
  )
}

export default ProductCards