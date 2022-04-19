import "./loandata.scss";
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
import { red } from '@mui/material/colors';
import { green } from '@mui/material/colors';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ErrorMessage from '../../components/errormessage/Errormessage'
import axios from "axios"
import {useState, useEffect} from "react"
import {useParams, useNavigate} from "react-router-dom"
import { formHelperTextClasses, touchRippleClasses } from "@mui/material";
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
const Loandata = () => {
  const history = useNavigate();
  const [errorMessage, seterrorMessage] = useState("");
  const [errors, setErrors] = useState(false);
  const [name, setName] = useState("");
  const [interest, setInterest]=useState("")
  const user= localStorage.getItem('id');
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
   .get("http://localhost:5000/maricredit/loans")
    .then((response) => {
    setData(response.data.loan)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleUpdate=(id) =>{
    history(`/edit/${id}`)
  }
  const handleView=(id)=>{
    history(`/viewloan/${id}`)
  }
  const handleDelete =(id)=>{
    setOpen(true);
    localStorage.setItem('loan', id)
    axios.get('http://localhost:5000/maricredit/loans/'+id)
    .then((response) =>{
      console.log(response.data.loan.request)
      localStorage.setItem('request',response.data.loan.request )
    }) 
    console.log(id);
  }
  const handleConfirm =(e)=>{
    e.preventDefault();
  
   
      const index = localStorage.getItem('loan');
      const request=localStorage.getItem('request');
      if(request === "pending" || request === "rejected"){
        setErrors(false)
        setOpen(false);
        axios.delete('http://localhost:5000/maricredit/loans/'+index+"/"+user)
        .then((response) =>{
          console.log(response.data.msg)
          localStorage.removeItem('loan')
          localStorage.removeItem('request')
      
          history('/loans')
          window.location.reload()
        }) 
      }else if(request === "approved"){
        setOpen(true);
        setErrors(true)
        seterrorMessage('You cannot delete an approved/active loan')

      }
    
  }
  const handleClose = () => {
    setErrors(false)
    setOpen(false)
    localStorage.removeItem('loan')
    localStorage.removeItem('request')
  }
  return (
    <div>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          Confirm
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, mb:3 }}>
            Are you sure you want to delete this loan?
          </Typography>
          <Button type="submit" variant="contained" color='error' style={{marginRight:"10px"}}
          onClick={handleConfirm}>Delete</Button>
          <Button type="submit"variant="contained" onClick={handleClose}>Cancel</Button>
          {errors && <ErrorMessage variant="danger">{(errorMessage)}</ErrorMessage> }
        </Box>
      </Modal>
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell" align="left" style={{width: 120}}>Name </TableCell>
            <TableCell className="tableCell" align="left" style={{width: 100}}>ID </TableCell>
            <TableCell className="tableCell" align="left" style={{width: 100}}>Phone Number</TableCell>
            <TableCell className="tableCell" align="left" style={{width: 100}}>Loan Product</TableCell>
            <TableCell className="tableCell" align="left" style={{width: 100}}>Amount</TableCell>
            <TableCell className="tableCell" align="left" style={{width: 100}}>Tenature</TableCell>
            <TableCell className="tableCell" align="left" style={{width: 100}}>Request</TableCell>
            <TableCell className="tableCell" align="left" style={{width: 100}}>Action</TableCell>
            <TableCell className="tableCell" align="left" style={{width: 100}}></TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, i) => (
            <TableRow key={i}>
              <TableCell className="tableCell">{row.firstname}{" "}{row.lastname}</TableCell>
              <TableCell className="tableCell">{row.idnumber}</TableCell>
              <TableCell className="tableCell">{row.phonenumber}</TableCell>
              <TableCell className="tableCell">{row.product}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.tenature}{row.period}</TableCell>
              <TableCell className="tableCell">{row.request}</TableCell>
              {/* <TableCell className="tableCell">{row.requestedOn}</TableCell> */}
              <TableCell className="tableCell"><VisibilityIcon sx={{color: green[500]}}  onClick={()=>handleView(row._id)}/></TableCell>
              {/* <TableCell className="tableCell"><BorderColorSharpIcon sx={{color: green[500]}}  onClick={()=>handleUpdate(row._id)}/></TableCell> */}
             <TableCell align="left"><DeleteIcon sx={{color: red[500]}} onClick={()=>handleDelete(row._id)}/></TableCell>
            </TableRow>

          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
};

export default Loandata;