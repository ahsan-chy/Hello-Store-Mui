import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Profile = () => {
  return (
    <Box sx={{display:'flex', my:5, py:5}}>
      <Container>
      <Typography variant='h3' sx={{textAlign:"center"}}>Profile</Typography>
                        
            

      </Container>
      </Box>
  )
}

export default Profile