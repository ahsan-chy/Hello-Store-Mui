import {React, useState } from 'react'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import {TextField} from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signin } from '../redux/actions/userAction'
import axios from 'axios';
import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
  }));

const SignIn = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

const loginUser = async(e) => {
    e.preventDefault()
    if( !email || !password)
    {
        alert("Fill All Fields")
    }
    else{
        try{
            axios.post(`http://localhost:1337/api/auth/local/`, {
                identifier: email,
                password: password
            }).then(response => {
                const { jwt, user, id } = response.data;
                localStorage.setItem('jwt', jwt)
                // localStorage.setItem('userData', JSON.stringify(user))
                console.log(user)
                // alert("Login Successfully")
                console.log("Login Successfully")
                if (user || jwt || id) {
                    const token = jwt
                    dispatch(signin(user.username, user.email, token, user.id))
                    toast.success('SignIn Successfully', {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        });
                    navigate("/profile/dashboard")
            }})
            .catch(error => {
                console.log("Error is Error",error.message)
                toast.error('Login Failed', {
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
        catch (error){
            console.log("Error is Error",error.message)
            toast.error('Login Failed', {
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
} }

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
                        <form onSubmit={loginUser}>
                        <Typography variant='h5' sx={{color:"#001e3c", textAlign:"center"}}>Sign In</Typography>
                        <TextField 
                            type="text" 
                            name="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            fullWidth label="Username/Email" placeholder='Enter Your Username/ Email' margin="normal"/>
                        <TextField type="password" 
                            name="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            fullWidth label="Password" placeholder='Enter Your Password'  margin="normal"/>
                        
                        <Button type="submit"  variant="contained" fullWidth sx={{color:'#fff',my:3, bgcolor:'#001e3c'}}>Submit</Button>
                        <Typography>
                            Don't have account <Link to="/register">Sign Up</Link>
                        </Typography>
                        </form>
                    </Item>
                </Grid>
            </Grid>
            </Box>
        </Container>
    </div>
  )
}

export default SignIn