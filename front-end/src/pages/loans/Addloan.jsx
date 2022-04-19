import "./addloan.scss"
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
const Addloan = () => {
  const history = useNavigate()
  const [errorMessage, seterrorMessage] = useState("");
  const [errors, setErrors] = useState(false);
  const [loading, setLoading] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname,setLastname] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [idnumber, setIdnumber] = useState(0);
  const [amount, setAmount] = useState(0);
  const [product, setProduct] = useState("")
  const [period, setPeriod] = useState('');
  const [tenature, setTenature] = useState(0)
  const [job, setJob] = useState("")
  const [emergency1, setEmergency1] = useState(0)
  const [emergency2, setEmergency2] = useState(0)
  const [total,setTotal] = useState(0)
  const userRef = useRef();
  const errorRef = useRef();
  const [name,setName] = useState([]);
  const [interest,setInterest] = useState(0)
  const [rate,setRate] = useState(0)
  const [finalAmount, setfinalAmount] = useState(0)
  const handleSubmit = async(event) => {
    event.preventDefault();
  await axios.get("http://localhost:5000/maricredit/products/interest/"+product)
  .then((res)=>{
  //  console.log(res.data.product.interest)
  //  setRate(res.data.product.interest)
   const J = res.data.product.interest
  console.log(J)
  setRate(J)
    })
  const t = rate/100*amount*tenature;
  setInterest(t)
  let f = 0;
  f = interest + parseInt(amount)
  setfinalAmount(f)
  console.log(rate)
  console.log(finalAmount)
  console.log(interest)
      try{
        setLoading(true);
        const response = await axios.post("http://localhost:5000/maricredit/loans",{
        firstname:firstname,
        lastname:lastname,
        phonenumber:phonenumber,
        idnumber:idnumber,
        amount:amount,
        product:product,
        rate:rate,
        interest:interest,
        finalAmount:finalAmount,
        period:period,
        tenature:tenature,
        job:job,
        emergency1:emergency1,
        emergency2:emergency2
        });
        setLoading(false);
        console.log(response.data);
    
        if(response.data){
            history('/loans')
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
  }
    }
  useEffect(()=>{
     axios.get("http://localhost:5000/maricredit/products")
        .then((response)=>{
            setName(response.data.products)

        })
      .catch((error)=>{
          console.log(error)
      });
  },[])

    useEffect(()=>{
      setErrors(false);
   },[firstname,lastname,phonenumber,idnumber,amount,tenature,period,job,emergency1,emergency2])
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <div className="container w-100 intro">
         <h4>Add Loan</h4>
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
              <h4>Step 1:Basic Information</h4>
            <Grid container spacing={2}>
          
              <Grid item xs={8} sm={6}>
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
                  sx={{mb:2}}

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
                  sx={{mb:2}}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="phone"
                  label="Phone Number"
                  className="form-control input1"
                  name="phonenumber"
                  value={phonenumber}
                  onChange={(event)=>setPhonenumber(event.target.value)}
                  sx={{mb:2}}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="idnumber"
                  label="Id Number"
                  type="number"
                  className="form-control input1"
                  id="idnumber"
                  value={idnumber}
                  onChange={(event)=>setIdnumber(event.target.value)}
                  sx={{mb:2}}
                />
              </Grid>
              <Grid item xs={12}>
                {/* <TextField
                  required
                  fullWidth
                  name="product"
                  label="Loan Product"
                  type="text"
                  className="form-control input1"
                  id="product"
                  value={product}
                  onChange={(event)=>setProduct(event.target.value)}
                  sx={{mb:2}}
                /> */}
                    <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Loan Product</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          defaultValue=""
          value={product}
          label="Loan Product"
          onChange={(event)=>setProduct(event.target.value)}
          sx={{mb:2}}
        >
     
       {name.map((names,i) => (
            <MenuItem
              key={i}
              value={names.name} 
            >
              {names.name}-{names.interest}%
            </MenuItem>
          ))}
         
        </Select>

        </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="amount"
                  label="Amount"
                  type="number"
                  className="form-control input1"
                  id="amount"
                  value={amount}
                  onChange={(event)=>setAmount(event.target.value)}
                  sx={{mb:3}}
                />
              </Grid>
              <Grid item xs={8} sm={6}>
              <TextField
                  required
                  fullWidth
                  name="tenature"
                  label="Tenature"
                  type="number"
                  className="form-control input1"
                  id="tenature"
                  value={tenature}
                  onChange={(event)=>setTenature(event.target.value)}
                  sx={{mb:2}}
                />
              </Grid>
              <Grid item xs={12} sm={6}>

              <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          defaultValue=""
          value={period}
          label="Duration Unit e.g months"
          onChange={(event)=>setPeriod(event.target.value)}
        >
          <MenuItem value="months">Months</MenuItem>
          <MenuItem value="years">Years</MenuItem>
          <MenuItem value="weeks">Weeks</MenuItem>
          <MenuItem value="days">Days</MenuItem>
        </Select>
              </Grid>
             
            </Grid>
           
          </Box>
          </Grid>
          <hr></hr>
          <Grid item xs={12} sm={6}>
          <Box>
          {loading && <CircularIndeterminate/> }
              {errors && <ErrorMessage variant="danger">{(errorMessage)}</ErrorMessage> }
              <h4>Step 2: Work & Contact</h4>
            <Grid container spacing={2}>
          
              <Grid item xs={12}>
                <TextField
                  name="job"
                  value={job}
                  onChange={(event)=>setJob(event.target.value)}
                  required
                  fullWidth
                  id="job"
                  label="Job"
                  className="form-control input1"
              
                  sx={{mb:2}}

                />
              </Grid>
            
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="emergency1"
                  label="Emergency Contact 1"
                  type="number"
                  className="form-control input1"
                  id="emergency1"
                  value={emergency1}
                  onChange={(event)=>setEmergency1(event.target.value)}
                  sx={{mb:2}}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="emergency2"
                  label="Emergency Contact 2"
                  type="number"
                  className="form-control input1"
                  id="emergency2"
                  value={emergency2}
                  onChange={(event)=>setEmergency2(event.target.value)}
                  sx={{mb:2}}
                />
              </Grid>
            </Grid>
            <Button
             fullWidth
              type="submit"
              variant="contained"
              style={{marginTop:"200px",backgroundColor:"green"}}
            
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

export default Addloan