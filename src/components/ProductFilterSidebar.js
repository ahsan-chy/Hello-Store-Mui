import React, { useState } from 'react'
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

const ProductFilterSidebar = () => {
    const [showPassword, setShowPassword] = useState(false);  

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
            <FormControlLabel control={<Checkbox defaultChecked />} label="Men's" />
            <FormControlLabel control={<Checkbox />} label="Women's" />
            <FormControlLabel control={<Checkbox />} label="Electronics" />
            <FormControlLabel control={<Checkbox />} label="Jewellary" />
         </FormGroup>
         <Button type="submit" variant="contained" fullWidth sx={{color:'#fff', my:2, bgcolor:'#001e3c'}}>Filter</Button>
        </Box>
        
        </Stack>

        </div>


        </Box>
  )
}

export default ProductFilterSidebar