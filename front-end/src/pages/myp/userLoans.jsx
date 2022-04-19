import "./myp.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Table from "../../components/table/Table"
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom'
import { green } from '@mui/material/colors';
import Userloandata from './userLoandata'

  const Userloans = () => {
  const history = useNavigate();
  const handleSubmit=()=>{
   history('/addproduct')
  }
  return (
    <div className="single">
    <Sidebar />
    <div className="singleContainer">
      <Navbar />
       <Userloandata/>
    </div>
 </div>
  )
}

export default Userloans