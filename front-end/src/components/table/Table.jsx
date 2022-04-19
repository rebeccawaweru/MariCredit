import "./table.scss";
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
const List = () => {
  const history = useNavigate();
  const [name, setName] = useState("");
  const [interest, setInterest]=useState("")
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
   .get("http://localhost:5000/maricredit/products")
    .then((res) => {
    setData(res.data.products)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const handleUpdate=(id) =>{
    history(`/edit/${id}`)
  }
  const handleDelete =(id)=>{
    setOpen(true);
    localStorage.setItem('product', id)
    const user= localStorage.getItem('id');
    axios.get('http://localhost:5000/maricredit/products/'+id+"/"+user)
    .then((response) =>{
      setName(response.data.product.name)
      console.log(response.data.product.name)
    }) 
    console.log(id);
  }
  const handleConfirm =(e)=>{
    e.preventDefault();
      setOpen(false);
      const Index = localStorage.getItem('product');
      const user= localStorage.getItem('id');
      axios.delete('http://localhost:5000/maricredit/products/'+Index+"/"+user)
      .then((response) =>{
        console.log(response.data.msg)
        localStorage.removeItem('index')
        if(response.data.msg === 'Product deleted'){
          history('/products')
          window.location.reload()
        }
      }) 
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
            Are you sure you want to delete product {name}
          </Typography>
          <Button type="submit" variant="contained" color='error' style={{marginRight:"10px"}}onClick={handleConfirm}>Delete</Button>
          <Button type="submit"variant="contained" onClick={handleClose}>Cancel</Button>
        </Box>
      </Modal>
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell" align="left" style={{width: 100}}>Product Name</TableCell>
            <TableCell className="tableCell" align="left" style={{width: 100}}>Interest</TableCell>
            <TableCell className="tableCell" align="left" style={{width: 100}}>Added On</TableCell>
            <TableCell className="tableCell" align="left" style={{width: 100}}>Action</TableCell>
            <TableCell className="tableCell" align="left" style={{width: 100}}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, i) => (
            <TableRow key={i}>
              <TableCell className="tableCell">{row.name}</TableCell>
              <TableCell className="tableCell">{row.interest}%p.a</TableCell>
              <TableCell className="tableCell">{row.createdAt}</TableCell>
              <TableCell className="tableCell"><BorderColorSharpIcon color="success" onClick={()=>handleUpdate(row._id)}/></TableCell>
             <TableCell align="left"><DeleteIcon sx={{color: red[500]}} onClick={()=>handleDelete(row._id)}/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
};

export default List;