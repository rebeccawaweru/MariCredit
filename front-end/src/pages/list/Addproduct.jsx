import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import React from 'react'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import axios from 'axios'
import {useNavigate} from "react-router-dom"
import {useState,useEffect,useRef} from 'react'
import ErrorMessage from '../../components/errormessage/Errormessage'
import CircularIndeterminate from '../../components/loading/Loading'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
const Addproduct = () => {
  const history = useNavigate()
  const user = localStorage.getItem('id')
  const [errorMessage, seterrorMessage] = useState("");
  const [errors, setErrors] = useState(false);
  const [loading, setLoading] = useState(false);
  const [interest,setInterest] = useState(0);
  const userRef = useRef();
  const errorRef = useRef();
  const [name,setName] = useState([]);
  const handleSubmit = async(event) => {
    event.preventDefault();
      try{
        setLoading(true);
        const response = await axios.post("http://localhost:5000/maricredit/products/"+user, {
        name:name,
        interest:interest,
        });
        setLoading(false);
        console.log(response.data);
        if(response.data){
            history('/products')
        }
   
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
  }}

  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <div className="container w-100 intro">
         <h4>Add Loan Product</h4>
        </div>
      
        <CssBaseline />
        <Box
         component="form" noValidate onSubmit={handleSubmit}
        sx={{mt:2}}
        width='80%'
        paddingLeft='20px'
        display='flex'
        gap='90px'
        >
          <Grid item xs={12} sm={2}>
            
          <Box>
          {loading && <CircularIndeterminate/> }
              {errors && <ErrorMessage variant="danger">{(errorMessage)}</ErrorMessage> }
            
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="product"
                  label="Product name"
                  className="form-control input1"
                  name="product"
                  value={name}
                  onChange={(event)=>setName(event.target.value)}
                  sx={{mb:3, mt:3}}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="interest"
                  label="Interest"
                  type="number"
                  className="form-control input1"
                  id="interest"
                  value={interest}
                  onChange={(event)=>setInterest(event.target.value)}
                  sx={{mb:2}}
                />
              </Grid>
            </Grid>
            <Button
             fullWidth
              type="submit"
              variant="contained"
              style={{marginTop:"50px",backgroundColor:"green"}}
            
            >
            Submit
            </Button>
          </Box>
          </Grid>
        </Box>
      </div>
    </div>
  )
}

export default Addproduct