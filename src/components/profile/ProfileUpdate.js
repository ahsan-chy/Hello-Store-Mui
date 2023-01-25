import React, { useEffect, useState } from 'react'
import {  Container } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { useParams } from 'react-router-dom'
import IconButton from '@mui/material/IconButton';
import AddAPhoto from '@mui/icons-material/AddAPhoto';
import { Box, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '../Button';
import axios from 'axios';
import { toast } from 'react-toastify';
import { ACCESS_TOKEN, STRAPI_MEDIA_URL } from '../../constants/strapi';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../../redux/actions/userAction';

const ProfileUpdate = ({loginUser}) => {
  const img = STRAPI_MEDIA_URL+loginUser?.data?.[0]?.image?.url
  const [username, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [picture, setPicture] = useState(img);
  const dispatch = useDispatch();

const  onImageChange = event => {
  let file = event.target.files[0];
  if(file) setPicture(file);
    console.log(picture);
  };


  let {user}  = useSelector((state) => ({ ...state }));
  const userId = user.userData.id;
  
  const form = document.getElementById('my_form');

const updateProfileData = (e) => {
    e.preventDefault()
    try{
        axios.put(`http://localhost:1337/api/users/${userId}`, 
        {
          username: username === '' ? user.userData.username : username !== user.userData.username ? username :  toast.error('Please Enter Different Username', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            }),
          email: email === '' ? user.userData.email : email !== user.userData.email ? email :  toast.error('Please Enter Different Email', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            })
        },
            {
            headers: {
                Authorization: `Bearer ${ACCESS_TOKEN}`
            } }
       ).then(response => {
        console.log("Befor update profile")
        dispatch(updateProfile(userId, username === '' ? user.userData.username : username, email === '' ? user.userData.email : email, user.userData.token))
        setUserName("");
        setEmail("")
        toast.success('Profile Updated Successfully', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          })
       })
    }
    catch(error){
        console.log("Error")
        toast.error('Error in Change Order Status', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    }
}   

// const fileURL = {
//   "ref": "plugin::users-permissions.usera",
//   "refId": userId,
//   "field": "image",
//   "files": picture,
// }

const imageUpload = async () => {
//   let data = new FormData();
const data = new FormData()

data.append("ref", "plugin::users-permissions.user");
data.append("refId", userId);
data.append("field", "image");
data.append("files", picture);
console.log(userId);
    // formData.append('files', picture);
    try{
    axios.post("http://localhost:1337/api/upload", data,{
            headers: {
                Authorization: `Bearer ${ACCESS_TOKEN}`,
                'Content-Type': 'multipart/form-data'
            } })
    .then((response)=>{
      toast.success('Profile Image Uploaded', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        })
    }).catch((error)=>{
        //handle error
        console.log("ERROR");
    })
  }catch(err){
    console.log(err.message);
    console.log("Error")
          toast.error('Error while Uploading', {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              });
  }
      // try{
        //   axios.post(`http://localhost:1337/api/upload/`, 
        //     data,
        //       {
        //       headers: {
        //           Authorization: `Bearer ${ACCESS_TOKEN}`,
        //           'Content-Type': 'multipart/form-data'
        //       } }
        //  ).then(()=> {
        //   console.log("Image Uploaded Bro")
        //  })
        //  .catch((e)=> console.log(e.message))

      // }
      // catch(error){
          // console.log("Error")
          // toast.error('Error while Uploading', {
          //     position: "top-right",
          //     autoClose: 3000,
          //     hideProgressBar: false,
          //     closeOnClick: true,
          //     pauseOnHover: true,
          //     draggable: true,
          //     progress: undefined,
          //     theme: "dark",
          //     });
      // }
  }   

useEffect(()=>{
    imageUpload()
    // console.log("Image Uploaded Successfully", picture)
},[picture])
return (
    <div>
       <Grid2>
        <Container>
          <form onSubmit={updateProfileData}>
        <Grid2 container
        sx={{ borderRadius: 1,
          p: 3,
          boxShadow: 2,
          }}
          spacing={3}
          >
            <Grid2 item lg={12} md={12} sm={12} xs={12}>
                    <Box style={{width:'85px', marginLeft:'auto', marginRight:'auto'}} >
                    <IconButton color="primary" aria-label="upload picture" component="label" >
                      
                      <input hidden 
                        type='file' 
                        id='picture' 
                        name="picture"
                        accept="image/*" 
                        // value={picture}

                        // ! ---- Error Come  here when i try to upload image
                        onChange={onImageChange}
                        />
                      <AddAPhoto sx={{fontSize:'85px'}} />
                    </IconButton>
                    </Box>
                      <Typography variant='h6' sx={{textAlign:"center", fontSize: 16}}>
                        Update Profile
                      </Typography>
             </Grid2>
            <Grid2 item lg={6} md={6} sm={12} xs={12}>
                    <Box>
                    <Typography variant='h6' sx={{textAlign:"left", fontSize: 16}}>
                      Username
                      <TextField type="text" fullWidth 
                        name="Username"
                        value={username}
                        onChange={e => setUserName(e.target.value)}
                        label="Username"  size="small"  sx={{my:2}}/>
                    </Typography>
                    </Box>
             </Grid2>
            <Grid2 item lg={6} md={6} sm={12} xs={12}>
                  <Box>
                    <Typography variant='h6' sx={{textAlign:"left", fontSize: 16}}>
                      Email
                      <TextField type="text" fullWidth 
                        name="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        label="Email"  size="small"  sx={{my:2}}/>
                    </Typography>
                    </Box>
             </Grid2>
            {/* <Grid2 item lg={6} md={6} sm={12} xs={12}>
                    <Box>
                    <Typography variant='h6' sx={{textAlign:"left", fontSize: 16}}>
                      Update Password
                      <TextField type="text" fullWidth 
                        name="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        label="Password"  size="small"  sx={{my:2}}/>
                    </Typography>
                    </Box>
             </Grid2> */}
            <Grid2 item lg={6} md={6} sm={12} xs={12}>
                  <Box sx={{my:1}}>
                  <Button type={"Submit"} variant="contained" sx={{backgroundColor:"#001E3C", width:'100%' }} 
                  label={"Update Profile"}/>
                    </Box>
             </Grid2>
      </Grid2>
             </form>
      </Container>
      </Grid2>
    </div>
  )
}

export default ProfileUpdate