import "./myp.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';
import BorderColorSharpIcon from '@mui/icons-material/BorderColorSharp';
import { green } from '@mui/material/colors';
import axios from "axios"
import {useState, useEffect} from "react"
import {useParams, useNavigate} from "react-router-dom"
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const Userloandata = () => {
  const history = useNavigate();
  const [name, setName] = useState("");
  const [interest, setInterest]=useState("")
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const [data, setData] = useState([]);
  const {phone} = useParams()
  const [amount,setAmount]=useState(0)
   
  const user = localStorage.getItem('id')
 let loans
  useEffect(()=>{
    axios.get('http://localhost:5000/maricredit/loans/userloans/'+phone+"/"+user)
    .then((response)=>{
        setData([response.data.loan]);
        setData(response.data.loan)
      console.log(data)
    })
  },[])

  const handleView =(id)=>{
      
    history(`/viewloan/${id}`)
  }

  return (
    <div>
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell" align="left" style={{width: 100}}>Loan Product</TableCell>
            <TableCell className="tableCell" align="left" style={{width: 100}}>Principal</TableCell>
          
            <TableCell className="tableCell" align="left" style={{width: 100}}>Loan Term</TableCell>
            <TableCell className="tableCell" align="left" style={{width: 100}}>Request On</TableCell>
            <TableCell className="tableCell" align="left" style={{width: 100}}>Request</TableCell>
            <TableCell className="tableCell" align="left" style={{width: 100}}>Action</TableCell>
            <TableCell className="tableCell" align="left" style={{width: 100}}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, i) => {
            return(
                <TableRow key={i}>
                <TableCell className="tableCell">{row.product}</TableCell>
                <TableCell className="tableCell">{row.amount}</TableCell>
                <TableCell className="tableCell">{row.tenature}{row.period}</TableCell>
                <TableCell className="tableCell">{row.requestedOn}</TableCell>
                <TableCell className="tableCell">{row.request}</TableCell>
               <TableCell align="left"><button sx={{color: green[500]}} onClick={()=>handleView(row._id)}>View More</button></TableCell>
              </TableRow>
            )
      
            })
          }
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
};

export default Userloandata;