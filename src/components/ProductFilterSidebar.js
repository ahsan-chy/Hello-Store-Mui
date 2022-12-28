import React, { useEffect, useState } from 'react'
import { Button, FormLabel, Typography } from '@mui/material'
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Search from '@mui/icons-material/Search';
import Stack from '@mui/material/Stack';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { STRAPI_API_URL, STRAPI_MEDIA_URL, ACCESS_TOKEN } from '../constants/strapi';
import axios from 'axios';

const ProductFilterSidebar = ({cat, setCat}) => {
    const [showPassword, setShowPassword] = useState(false);  
    const [category, setCategory] = useState([])
    const [err, setErr] = useState(null);

    const getCategories = async() => {
        try {
            let result = await axios.get(`${STRAPI_API_URL}/categories?populate=*`, {
                    headers: {
                        'Authorization': `Bearer ${ACCESS_TOKEN}`
                    }
                    })
                    setCategory(result.data.data)
        } catch (error) {
            setErr(error.message);
    } }
    const handleCheck =(e)=>{
     if(e.target.checked){
      let value = [...cat, e.target.value]
      setCat(value)
     }
     else{
        let values = e.target.value
        cat = cat.filter(item => item !== values)
        setCat(cat)
        // console.log("Unchecked")
     }
    }
    // console.log("Category at filter",cat)
useEffect(()=>{
    getCategories()
},[])

  return (
        <Box  sx={{
          borderRadius: 1,
          p: 2,
          minWidth: 300,
          boxShadow: 2,
        }}
        >
        <Typography variant='h4' sx={{color:"#001e3c", my:3, textAlign:"left", fontSize: 24}}>Products Filter</Typography>
        <div>
        <Stack spacing={2}>

        <Box>
            
            <FormControl sx={{ width: '100%' }} variant="outlined">
            <InputLabel htmlFor="search">Search</InputLabel>
            <OutlinedInput
                id="search"
                type='search'
                endAdornment={
                <InputAdornment position="end">
                    <IconButton
                    onClick={console.log("Search")}
                    edge="end"
                    > <Search />
                    </IconButton>
                </InputAdornment>
                }
                label="Search"
            />
            </FormControl>
        </Box>
        <Box>
        <FormGroup>
            <FormLabel component="legend">Products Category</FormLabel>
            {category.map(p => (
            <FormControlLabel control={<Checkbox  />} onChange={handleCheck} value={p.attributes.name} label={p.attributes.name} key={p.id} />
            ))}
         </FormGroup>
         <Button type="submit" variant="contained" fullWidth sx={{color:'#fff', my:2, bgcolor:'#001e3c'}}>Filter</Button>
        </Box>
        
        </Stack>

        </div>


        </Box>
  )
}

export default ProductFilterSidebar