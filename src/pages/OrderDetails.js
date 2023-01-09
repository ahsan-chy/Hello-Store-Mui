import * as React from 'react';
import { Container, Typography } from '@mui/material';
import Button from '../components/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import IconButton from '@mui/material/IconButton';
import ForwardIcon from '@mui/icons-material/Forward';
import "../assets/css/orderDetails.css"
import Breadcrumb from '../components/Breadcrumb';

const OrderDetails = () => {
  return (
    <>
    <Breadcrumb pagetitle={"Order Details"}/>
     <Box sx={{mx:5, my:4}}>
        <Container>
            <Typography variant='h4' sx={{color:"#001e3c", textAlign:"left"}}>Order Details 🛒</Typography>
            <Box sx={{ flexGrow: 1, mt:2 }}>
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
                <Grid container sx={{boxShadow:1, borderRadius:2, my:2}} className="row-card">
                    <Grid lg={2} md={2} sx={{p:1}}>
                    1234
                    </Grid>
                    <Grid lg={3} md={3} sx={{p:1}}>
                    <Button variant="contained" color="success" sx={{borderRadius:5}} label={"Pending"} />
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
                </Grid>
                
                
                </Box>
        </Container>
    </Box>            
    </>
  )
}

export default OrderDetails
