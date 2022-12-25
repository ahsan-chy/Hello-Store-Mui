import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions, Grid } from '@mui/material';
import {products} from "../db/data"
import { useEffect } from 'react';
import axios from 'axios';


const ProductCards = () => {
    const [products, setProducts] = useState([])
    const [err, setErr] = useState(null);
    const STRAPI_API_URL = "http://localhost:1337/api" 
    const STRAPI_MEDIA_URL = "http://localhost:1337"
    const ACCESS_TOKEN="47e9095912b5457963916d3fc90ed6d2ed0552588e55faa73d0278479e018d8bed3e1869965610444d418b7d2dbdd4c08fc604327e359bdb8e9574581276a5220b9eecd38e70bddf4c2f5caf6f55f4a2d49ced66fc04dd1230d08ed20cec94021ed9d6e9902d553469c8ff2971d6abd7646229a6b7efe73eea27e106407406d0";

    const getProducts = async() => {
        try {
            let result = await axios.get(`${STRAPI_API_URL}/products?populate=*`, {
                    headers: {
                        'Authorization': `Bearer ${ACCESS_TOKEN}`
                    }
                    })
                    setProducts(result.data.data)
        } catch (error) {
            setErr(error.message);
    } }
useEffect(()=>{
    getProducts()
},[])
  return (
    <Box>
      {/* <Typography variant='h4' sx={{color:"#001e3c", my:3, textAlign:"center"}}>Store</Typography> */}
                        
      {/* <div className='row' style={{display:'flex', justifyContent:"center"}}> */}
      <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2, lg:2 }}>
      {
          products.map(p => (
          <Grid item xs={12} lg={3} md={4} sm={6} key={p.id}>
                <Card sx={{py:2 }} align="center">
                <CardActionArea>
                    <div style={{width:'250px', height:'100%'}}>
                        <CardMedia
                        sx={{
                        width: "70%",
                        height: 'auto'
                        }}
                        component="img"
                        image={STRAPI_MEDIA_URL+p.attributes.image.data[0].attributes.url}
                        alt="green iguana"
                        />
                    </div>

                    <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {/* {p.title.split(/\s+/).slice(0, 4).join(" ")} */}
                        {p.attributes.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {p.attributes.price}$
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions sx={{justifyContent:'center',}}>
                <Button variant="contained" >
                    Buy Now
                </Button>
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