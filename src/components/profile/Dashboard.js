import React from 'react'
import Button from '../Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
const Dashboard = () => {

  return (
    <>
    <Box>
        <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            sx={{justifyContent:'space-between', mx:6}}
        >
            <Item sx={{ padding:1, width:'200px', textAlign:"center", borderRadius:'5px', backgroundColor:'#001e3c', color:'#FFF'}}>
                <ShoppingBagIcon sx={{ my:2, fontSize:'35px', color:"#FFF"}}/>
                <Typography variant='h6'>Total Orders</Typography>
                <Typography variant='subtitle1' sx={{color:"#b4bbc3",fontSize:22, pt:1}}>30</Typography>
            </Item>
            <Item sx={{ padding:1, width:'200px', textAlign:"center", borderRadius:'5px', backgroundColor:'#001e3c', color:'#FFF'}}>
                <WorkHistoryIcon sx={{ my:2, fontSize:'35px', color:"#FFF"}}/>
                <Typography variant='h6'>Active Orders</Typography>
                <Typography variant='subtitle1' sx={{color:"#b4bbc3",fontSize:22, pt:1}}>30</Typography>
            </Item>
            <Item sx={{ padding:1, width:'200px', textAlign:"center", borderRadius:'5px', backgroundColor:'#001e3c', color:'#FFF'}}>
                <LocalShippingIcon sx={{ my:2, fontSize:'35px', color:"#FFF"}}/>
                <Typography variant='h6'>Delivered</Typography>
                <Typography variant='subtitle1' sx={{color:"#b4bbc3",fontSize:22, pt:1}}>30</Typography>
            </Item>
            <Item sx={{ padding:1, width:'200px', textAlign:"center", borderRadius:'5px', backgroundColor:'#001e3c', color:'#FFF'}}>
                <DeleteSweepIcon sx={{ my:2, fontSize:'35px', color:"#FFF"}}/>
                <Typography variant='h6'>Canceled Orders</Typography>
                <Typography variant='subtitle1' sx={{color:"#b4bbc3",fontSize:22, pt:1}}>30</Typography>
            </Item>
        </Stack>
    </Box>
        
    </>
  )
}

export default Dashboard