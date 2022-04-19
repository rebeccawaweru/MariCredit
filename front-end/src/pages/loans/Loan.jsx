import "./loan.scss"
import Loandata from "./Loandata"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Table from "../../components/table/Table"
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom'
import { green } from '@mui/material/colors';
const Loan = () => {
  const history = useNavigate()
  const handleSubmit = ()=>{
    history('/addloan')
  }
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <div className="container w-100 intro ">
         <h4>Loans</h4>
         <Button
            sm='true'
              type="submit"
              variant="contained"
              color="success"
              style={{marginLeft:"85%"}}
              sx={{mt:2 , mb:2, color:green[100]}}
              onClick={handleSubmit}
           
            >
              Add New Loan
            </Button>
        </div>
        <Loandata/>
      </div>
    </div>
  )
}

export default Loan