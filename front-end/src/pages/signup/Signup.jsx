import * as React from 'react';
import Img from '../../assets/images/bg1.jpg'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme} from '@mui/material/styles';
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
export default function Signup() {
 const history = useNavigate()
  const [errorMessage, seterrorMessage] = useState("");
  const [errors, setErrors] = useState(false);
  const [loading, setLoading] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname,setLastname] = useState("");
  const [phonenumber, setPhonenumber] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const userRef = useRef();
  const errorRef = useRef();
  const handleSubmit = async(event) => {
    event.preventDefault();
      try{
        setLoading(true);
        const response = await axios.post("http://localhost:5000/maricredit/auth/signup",{
        firstname:firstname,
        lastname:lastname,
        phonenumber:phonenumber,
        email:email,
        password:password,
        });
        setLoading(false);
        console.log(response.data);
        history('/login');
      }catch(err){
        setLoading(false);
        setErrors(true)
        console.log(err.message)
        if(err.message === "Request failed with status code 400"){
        seterrorMessage('Kindly input the missing fields')
         }else if (err.message === "Request failed with status code 401"){
            seterrorMessage('Email or Phone Number already exists') 
         }else if (err.message === "Network Error" || err.message === "Request failed with status code 500"){
        seterrorMessage('Network error. Please check your internet connection')

    }
  }
    }
    useEffect(()=>{
      setErrors(false);
   },[firstname,lastname,phonenumber,email,password])
  return (
    <div className='bg' style={{backgroundPosition:'left', minHeight:"100vh",backgroundSize:"cover",backgroundRepeat:'none'}}>
       <h2 style={{float:"left", paddingTop:"1.0%", marginLeft:"20px"}}>Mari<span className="text-success">Credit</span></h2>
      <Container component="main" maxWidth="xs" style={{paddingTop:"5%"}}>
        <CssBaseline />
        <Box
        position='relative'
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
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }} position="relative">
          {loading && <CircularIndeterminate/> }
              {errors && <ErrorMessage variant="danger">{(errorMessage)}</ErrorMessage> }
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
          
                <TextField
                  autoComplete="given-name"
                  name="firstname"
                  value={firstname}
                  onChange={(event)=>setFirstname(event.target.value)}
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  className="form-control input1"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastname"
                  value={lastname}
                  onChange={(event)=>setLastname(event.target.value)}
                  className="form-control input1"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  className="form-control input1"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(event)=>setEmail(event.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="phone"
                  label="Phone Number"
                  className="form-control input1"
                  name="phonenumber"
                  value={phonenumber}
                  onChange={(event)=>setPhonenumber(event.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  className="form-control input1"
                  id="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={(event)=>setPassword(event.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password2"
                  label="Confirm Password"
                  type="password"
                  className="form-control input1"
                  id="password2"
                  autoComplete="new-password"
                  value={password2}
                  onChange={(event)=>setPassword2(event.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item>
               
                <Link href="login" underline="none" color="inherit">
                <Typography component="h3" variant="p"> 
                Already have an account? Sign in
          </Typography>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
 </div>
  );
}