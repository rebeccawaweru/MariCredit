import React from 'react';
import {Box,Grid, Typography,Button,Container,Avatar,Stack,Card,CardContent,Divider} from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline';
import playstore from '../../assets/images/playstore.svg'
import {useNavigate} from "react-router-dom"
function LandingPage() {
  const history = useNavigate()
  const handleSubmit = ()=>{
     history("/login")
  }
    const style = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    my: 3,
    }
    return (
    <div className='bg2' style={{backgroundPosition:'left 900px center', minHeight:"100vh",backgroundRepeat:"none", backgroundSize:"cover"}}>
         <Box display="flex" style={{float:"right"}} >
<Button variant="contained" color="success" sx={{mt:5,borderRadius:"10%",boxShadow:8,mx:2}}onClick={handleSubmit}>Admin</Button>

</Box>
      <Container component="main" style={{paddingTop:"10%"}}>
 
        <CssBaseline />
        <Box>
          
<Typography variant="h2" component="h1">MARICREDIT</Typography>   
<Typography variant="p" component="h3" color="white">We Believe , We Multiply</Typography>  
<h3>Get short term loans</h3>
<Button variant="contained" color="success" sx={{boxShadow:8}} startIcon={<img src={playstore}/>}>
<Typography color="black">Download Our App</Typography>
</Button>
<Divider sx={{mt:3, mb:2}}><h3>Our Products</h3></Divider>
{/* <Button variant="outlined" color="success"  sx={{mt:5,borderRadius:"10%",boxShadow:8,mx:2}}>Admin</Button> */}

<Box display="flex">

<Card sx={{ minWidth: 275, boxShadow:8}} elevation={3} style={{boxShadow:100, border:"1px solid green", backgroundColor:"whitesmoke"}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         
        </Typography>
        <Typography variant="h5" component="div">
        Rent Loan
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
         product
        </Typography>
        <Typography variant="body2">
        
          <br />
          {}
        </Typography>
      </CardContent>
    </Card>
    <Card sx={{ minWidth: 275,mx:3 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
      
        </Typography>
        <Typography variant="h5" component="div">
       Farm Loan
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
         product
        </Typography>
        <Typography variant="body2">
     For external farms and cooperatives
          <br />
          {}
        </Typography>
      </CardContent>
    </Card>
    <Card sx={{ minWidth: 275,mx:3 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
    
        </Typography>
        <Typography variant="h5" component="div">
       Mari Landloan
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
         product
        </Typography>
        <Typography variant="body2">
         Only exclusive for landlords
          <br />
          {}
        </Typography>
      </CardContent>
    </Card>
    <Card sx={{ minWidth: 275,mx:3 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
   
        </Typography>
        <Typography variant="h5" component="div">
      Construction
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
         product
        </Typography>
        <Typography variant="body2">
        
          <br />
          {}
        </Typography>
      </CardContent>
    </Card>
</Box>

</Box>

      </Container>

    </div>
    )
}

export default LandingPage;

{/* <Grid container spacing={2} >
<Grid item xs={4}>
<Typography sx={{ mt: 6 }} variant="h2" color="success">
 MariCredit
 </Typography>
<Typography color="text.disabled" variant="h5" component="p">We Believe, We  Multiply</Typography>
<Button variant="contained" color="success" sx={{mt:5, mx:2 }}>Download Our App</Button>
<Button variant="contained" color="success"  sx={{mt:5}}>Dashboard</Button>

</Grid>
// <Grid item xs={8} sx={{mt:5}}>
//  {/* <img src={people} style={{minWidth:"100%", height:"80vh"}}/> */}
// // </Grid>
// // </Grid> */}