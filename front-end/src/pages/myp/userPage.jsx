import "./myp.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import axios from "axios"
import {useState, useEffect} from "react"
import {useParams, useNavigate} from "react-router-dom"
import Userloans from './userLoans'
import Button from '@mui/material/Button';
const UserPage = () => {
  const { id } = useParams();
  const history = useNavigate();
  const [user, setUser] = useState({
    firstname:"",
    lastname:"",
    phonenumber:"",
    email:"",
    userType:"",
    status:true,
  })
  useEffect(()=>{
    axios.get('http://localhost:5000/maricredit/auth/'+id)
    .then((response)=>{
      setUser(response.data.user)
    })
  },[])

  const handleSubmit = ()=>{
    const phone = user.phonenumber
    history(`/userloans/${phone}`)
  }
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top" style={{height:"60vh"}}>
          <div className="left">
            <h1 className="title">Basic Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">{user.firstname}{"  "}{user.lastname}</h1>
                <div className="detailItem">
                  <span className="itemKey">First Name:</span>
                  <span className="itemValue">{user.firstname}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Last Name:</span>
                  <span className="itemValue">{user.lastname}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{user.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">{user.phonenumber}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">User Type:</span>
                  <span className="itemValue">
                   {user.userType}
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Status:</span>
                  <span className="itemValue">{user.status}</span>
                </div>
                <Button type="submit" variant="contained" style={{marginRight:"10px"}} onClick={handleSubmit}>View loans</Button>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="bottom">
        <h1 className="title">Loans</h1>
          <Userloans/>
        </div> */}
      </div>
    </div>
  );
};

export default UserPage;