import React from 'react';
import { Image } from '@mui/icons-material'
import { Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: '#001e3c',
  '&:hover': {
    backgroundColor: '#001e3c',
  },
}));

const Home = () => {
  return (
    <Container>
      <Grid container spacing={2}>
      <Grid item lg={9} md={9} sm={12} xs={12}>
        <Typography gutterBottom variant="h3" component="div">50% off on your First Shopping</Typography>
        <Typography gutterBottom variant="subtitle1" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.</Typography>
        <ColorButton variant="contained">Visit Store</ColorButton>
      </Grid>
      <Grid item lg={3} md={3} sm={12} xs={12}>
      <div className="image-holder">
        <img src="./apple-watch-0.png" alt="apple-watch-1"/>
      </div>
      </Grid>
    </Grid>
      
    </Container>
  )
}

export default Home