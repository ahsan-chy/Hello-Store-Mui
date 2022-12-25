import React from 'react'
import ProductCards from '../components/ProductCards'
import ProductFilterSidebar from '../components/ProductFilterSidebar'
import { Box, Container } from '@mui/material';
import Grid from '@mui/material/Grid';

const Store = () => {
  return (
    <Grid container spacing={2} px={3} my={2}>
      <Grid item lg={3}>
        <ProductFilterSidebar/>
      </Grid>
      <Grid item lg={9}>
        <ProductCards />
      </Grid>
    </Grid>
  )
}

export default Store