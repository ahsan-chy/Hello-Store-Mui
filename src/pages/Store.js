import React, { useState } from 'react'
import ProductCards from '../components/ProductCards'
import ProductFilterSidebar from '../components/ProductFilterSidebar'
import { Box, Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useEffect } from 'react';
import Breadcrumb from '../components/Breadcrumb';

const Store = () => {
  let [cat, setCat] = useState("")
  const [search, setSearch] = useState('')
useEffect(()=>{
  console.log(cat)
},[cat])
useEffect(() => {
  console.log(search)
},[search])
  
  
  return (
    <>
     <Breadcrumb pagetitle={"Store Page"}/>
    <Grid container spacing={2} px={3} my={2}>
      <Grid item lg={3} md={3} sm={12} xs={12}>
        <ProductFilterSidebar cat={cat} setCat={setCat} search={search} setSearch={setSearch}/>
      </Grid>
      <Grid item lg={9} md={9} sm={12} xs={12}>
        <ProductCards cat={cat} search={search}/>
      </Grid>
    </Grid>
    </>
  )
}

export default Store