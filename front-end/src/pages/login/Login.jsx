import * as React from 'react';
import Img from '../../assets/images/bg1.jpg'
import '../../assets/main.css'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import HomeIcon from '@mui/icons-material/Home';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios'
import {useNavigate} from "react-router-dom"
import {useState,useEffect,useRef} from 'react'
import ErrorMessage from '../../components/errormessage/Errormessage'
import CircularIndeterminate from '../../components/loading/Loading'

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="">
       MariCredit
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const history = useNavigate()
  const [errorMessage, seterrorMessage] = useState("");
  const [errors, setErrors] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleSubmit = async(event) => {
    event.preventDefault();
     try{
      setLoading(true);
      const response = await axios.post("http://localhost:5000/maricredit/auth/login",{
      email:email,
      password:password,
      });
      setLoading(false);
      if(response.data){
      let token = response.data.token;
      localStorage.setItem('accesstoken', token)
          console.log(response.data)
          history('/')
      }
     }catch(err){
      setLoading(false);
      setErrors(true)
      console.log(err.message)
      if(err.message === "Request failed with status code 400"){
      seterrorMessage('Kindly input the missing fields')
       }else if (err.message === "Request failed with status code 401" || err.message === "Request failed with status code 404"){
       seterrorMessage('Wrong credentials') 
       }else if (err.message === "Network Error"){
           seterrorMessage('Network error. Please check your internet connection')
     }
     }
  };
  useEffect(()=>{
    setErrors(false);
 },[email,password])
  return (
      <div className='bg2' style={{backgroundPosition:'left', minHeight:"100vh",backgroundSize:"cover",backgroundRepeat:'none'}}>
       <h2 style={{float:"left", paddingTop:"1.5%", marginLeft:"20px"}}>Mari<span className="text-success">Credit</span></h2>
      <Container component="main" maxWidth="xs" style={{paddingTop:"10%"}}>
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'green' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          {loading && <CircularIndeterminate/> }
              {errors && <ErrorMessage variant="danger">{(errorMessage)}</ErrorMessage> }
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="off"
              autoFocus
              className="form-control input1"
              value={email}
              onChange={(event)=>setEmail(event.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              className="form-control input1"
              value={password}
              onChange={(event)=>setPassword(event.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="success"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
          {/* <Grid container>
              <Grid item>
              Already have an account?<Link to={'/'} className="label">Sign In</Link>
              </Grid>
            </Grid> */}
        </Box>
        <Box display="flex">
         <Link href="signup" underline="none" color="inherit">
          <Typography component="h3" variant="p"> 
          Sign Up
          </Typography>
        </Link>
        <Link href="forgotpassword" underline="none" color="inherit" marginLeft="150px">
          <Typography component="h3" variant="p"> 
          Forgot Password?
          </Typography>
        </Link>
         </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
 
    </div>
  );
}