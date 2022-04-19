import "./loan.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import Button from '@mui/material/Button';
import axios from "axios"
import {useState, useEffect} from "react"
import {useParams, useNavigate} from "react-router-dom"
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
const Viewloan = ({ }) => {
  const {id} = useParams();
  const history = useNavigate();
  const [name, setName] = useState("");
    const [interest,setInterest] = useState([])
    const [rate,setRate] = useState(0)
    const user = localStorage.getItem('id')
    const[product,setProduct] = useState("")
  const [data, setData] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:5000/maricredit/loans/'+id)
    .then((response)=>{
    setData(response.data.loan)
 })
  },[])
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Loan Information</h1>
        </div>
        <div className="bottom">
    
        <div className="right">
         
              <div className="formInput">

              <Typography component="p" variant="p" sx={{mb:3}}> 
               Name: {" "}{data.firstname}{" "}{data.lastname}
             </Typography>
             <Typography component="p" variant="p" sx={{mb:3}}> 
             ID:  {" "}{data.idnumber}
             </Typography>
             <Typography component="p" variant="p" sx={{mb:3}}> 
            Phone number:  {" "}+254{data.phonenumber}
             </Typography>
             <Typography component="p" variant="p" sx={{mb:3}}> 
             Loan Product:  {" "}{data.product}
             </Typography>
             <Typography component="p" variant="p" sx={{mb:3}}> 
             Interest Rate:  {" "} {data.rate} % p.a
             </Typography>
             <Typography component="p" variant="p" sx={{mb:3}}> 
            Principal:  {" "}{data.amount}
             </Typography>
             <Typography component="p" variant="p" sx={{mb:3}}> 
          Tenature:  {" "}{data.tenature}{data.period}
             </Typography>   
             <Typography component="p" variant="p" sx={{mb:3}}> 
           Interest:  {" "}{data.interest}
             </Typography>  
             <Typography component="p" variant="p" sx={{mb:3}}> 
           Total Amount:  {" "}{data.finalAmount}
             </Typography> 
             <Typography component="p" variant="p" sx={{mb:3}}> 
         Request:  {" "}{data.request}
             </Typography>     
             <Typography component="p" variant="p" sx={{mb:3}}> 
              Job:  {" "}{data.job}
             </Typography>  
             <Typography component="p" variant="p" sx={{mb:3}}> 
         Emergency1:  {" "}+254{data.emergency1}
             </Typography>  
             <Typography component="p" variant="p" sx={{mb:3}}> 
         Emergency2:  {" "}+254{data.emergency2}
             </Typography>    
              </div>
            
              <div className="right">
              <Link href="/loans" color="inherit">
                <Typography component="p" variant="p"> 
               Back
             </Typography>
                </Link>
              </div>
      
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Viewloan;
