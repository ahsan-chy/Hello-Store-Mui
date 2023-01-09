import React, { useState } from 'react'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import {TextField} from '@material-ui/core';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
  }));

const SignUp = () => {
    const navigate = useNavigate()
const [username, setUsername] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const newUser = (e) => {
    e.preventDefault()
    if(!username || !email || !password)
    {
        alert("Fill All Fields")
    }
    else{
        try {
            axios.post('http://localhost:1337/api/auth/local/register', {
            username: username,
            email: email,
            password: password,
        })
        .then(response => {
            console.log("User Registered Successfully");
            navigate("/login")
            toast.success('SignUp Successfully', {
                position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            console.log('User profile', response.data.user);
            console.log('User token', response.data.jwt);
        })
        .catch(error => {
            console.log("Error is Error",error.message)
            toast.error('SignUP Failed', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        })
        }
        catch(error) {
            console.log('An error occurred:', error.message);
            toast.error('SignUp Failed', {
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
}}

  return (
    <div>
        <Container maxWidth="l" >
            <Box >
            {/* <Typography variant="h4">Sign Up</Typography> */}
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Box> </Box>
                </Grid>
                <Grid item xs={6}>
                    <Item sx={{p:3, mx:10, my:5}}>
                        <form onSubmit={newUser}>
                        <Typography variant='h5' sx={{color:"#001e3c", textAlign:"center"}}>Sign Up</Typography>
                        <TextField fullWidth 
                            name="username"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            label="Full Name" placeholder='Enter Your Full Name ' margin="normal"/>
                        <TextField 
                            type="email" 
                            name="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            fullWidth label="Email" placeholder='Enter Your Email' margin="normal"/>

                        <TextField type="password" 
                            name="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            fullWidth label="Password" placeholder='Enter Your Password'  margin="normal"/>
                        
                        <FormControl sx={{mt:2}}>
                        <FormLabel id="choose-gender">Gender</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="choose-gender"
                            defaultValue="male"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            
                        </RadioGroup>
                        </FormControl>
                        <Button type="submit" variant="contained" fullWidth sx={{color:'#fff', my:2, bgcolor:'#001e3c'}}>Submit</Button>
                        </form>
                        <Typography>
                            Already have Account <Link to="/login">Sign In</Link>
                        </Typography>
                    </Item>
                </Grid>
            </Grid>
            </Box>
        </Container>
        
       
    </div>
  )
}

export default SignUp