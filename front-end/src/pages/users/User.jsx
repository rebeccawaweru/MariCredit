import React,  {useState,useEffect} from 'react';
import "./user.scss";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import TablePagination from '@mui/material/TablePagination';
import Pagination from '@mui/material/Pagination';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { red } from '@mui/material/colors';
import ErrorMessage from '../../components/errormessage/Errormessage'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ReportProblemSharpIcon from '@mui/icons-material/ReportProblemSharp';
import {useNavigate} from "react-router-dom"
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
function createData(name, email, phone, action) {
 return { name, email, phone, action };
} 
 
const rows = [];

const TablePaginationDemo = ()=> {
  const [page, setPage] = useState(2);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TablePagination
      component="div"
      count={10}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
}
export default function User(customRowsPerPage) {
const [name, setName] = useState("");
const [lastname, setLastname] = useState("");
const [open, setOpen] = useState(false);
const handleClose = () => setOpen(false);
const history = useNavigate()

 const [data, setData] = useState([]);
 const pages = [5, 10, 25, 50, 75, 100]
 const [page, setPage] = useState(0)
 const [rowsPerPage, setRowsPerPage] = useState(customRowsPerPage || 50)
 const handleChangePage = (event, newPage) => {
  setPage(newPage);
  }  
  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0);
}

useEffect(() => {
  axios
    .get("http://localhost:5000/maricredit/auth/login")
    .then((res) => {
      setData([res.data.user]);
      setData(res.data.user)

     
    })
    .catch((error) => {
      console.log(error);
    });
}, []);


const handleSubmit=(id)=>{
  history(`/view/${id}`)
}
const handleDelete =(id)=>{
  setOpen(true);
  localStorage.setItem('index', id)
  axios.get('http://localhost:5000/maricredit/auth/'+id)
  .then((response) =>{
    setName(response.data.user.firstname);
    setLastname(response.data.user.lastname);
  }) 
  console.log(id);
}
const handleConfirm =(e)=>{
  e.preventDefault();
    setOpen(false);
    const Index = localStorage.getItem('index');
    axios.delete('http://localhost:5000/maricredit/auth/'+Index)
    .then((response) =>{
      console.log(response.data)
      localStorage.removeItem('index')
      if(response.data.user){
        history('/users')
        window.location.reload()
      }
    }) 
}
// const TblPagination = () => (<TablePagination
//   component="div"
//   page={page}
//   rowsPerPageOptions={pages}
//   rowsPerPage={rowsPerPage}
//   count={data.length}
//   onChangePage={handleChangePage}
//   onChangeRowsPerPage={handleChangeRowsPerPage}
// />)
 
 
 return (
  <div className="list">
    <Sidebar/>
    <div className="listContainer">
    <Navbar/>
    <div className="container w-100 intro">
         <h4>Users</h4>
        </div>
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
            Are you sure you want to delete {name}{" "}{lastname}?
          </Typography>
          <Button type="submit" variant="contained" color='error' style={{marginRight:"10px"}}onClick={handleConfirm}>Delete</Button>
          <Button type="submit"variant="contained" onClick={handleClose}>Cancel</Button>
       <p><i><b>Please note that all records on this user will be deleted</b></i></p>
        </Box>
      </Modal>
  
    {/* <h4 style={{marginLeft:"20px"}}>Users
    </h4>   */}
    {/* <hr></hr> */}
   <TableContainer component={Paper}>
     <Table aria-label="simple table" stickyHeader >
       <TableHead>
         <TableRow>
           <TableCell align="left" style={{width: 100}}>Name</TableCell>
           <TableCell align="left" style={{width: 100}}>Email</TableCell>
           <TableCell align="left" style={{width: 100}}>Phone</TableCell>
           <TableCell align="left" style={{width: 100}}>Actions</TableCell>
           <TableCell align="left" style={{width: 100}}></TableCell>
         </TableRow>
       </TableHead>
       <TableBody>
         
         {data.map((row, i) => (
           <TableRow key={i}>
           
             <TableCell align="left">{row.firstname}{" "}{row.lastname}</TableCell>
             <TableCell align="left">{row.email}</TableCell>
             <TableCell align="left">{row.phonenumber}</TableCell>
             <TableCell align="left"><VisibilityIcon  color="success" onClick={()=>handleSubmit(row._id)}/></TableCell>
             <TableCell align="left"><DeleteIcon sx={{color: red[500]}} onClick={()=>handleDelete(row._id)}/></TableCell>
           </TableRow>
         ))}
       </TableBody>
     </Table>
   
   </TableContainer>
   </div>

   </div>

 
 );
}