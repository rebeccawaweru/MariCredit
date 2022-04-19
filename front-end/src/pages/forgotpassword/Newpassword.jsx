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
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
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

export default function Newpassword() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
      <div className='bg' style={{backgroundPosition:'left', minHeight:"100vh",backgroundSize:"cover",backgroundRepeat:'none'}}>
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
           Set New Password
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Enter New Password"
              type="password"
              id="password"
              autoComplete="current-password"
              className="form-control input1"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Confirm New Password"
              type="password"
              id="password"
              autoComplete="current-password"
              className="form-control input1"
            />
          
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
             Reset
            </Button>
          </Box>
       
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
 
    </div>
  );
}