import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
// import List from "../../components/table/Table";
import bottom from "../../assets/images/bottom.svg"
import { width } from "@mui/system";
import axios from "axios"
import {useState, useEffect} from "react"
import {useParams, useNavigate} from "react-router-dom"

const Single = () => {
  const { userId } = useParams();
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
    axios.get('http://localhost:5000/maricredit/auth/'+userId)
    .then((response)=>{
      setUser(response.data.user)
    })
  },[])

  const handleSubmit=()=>{
    history(`/new/${userId}`)
  }
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
                <div className="left">
                <div className="editButton" onClick={handleSubmit}>Edit</div>
                <h1 className="title">My Information</h1>
                {/* {user.map((users, key)=>{
                 return(
                   <> */}
              <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg"
              />
              
              <div className="details">
                <h1 className="itemTitle">{user.fullname}</h1>
                <div className="detailItem">
                  <span className="itemKey">First Name:</span>
                  <span className="itemValue">{user.fullname}</span>
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
                {/* <div className="detailItem">
                  <span className="itemKey">Status:</span>
                  <span className="itemValue">{user.status}</span>
                </div> */}
             
              </div>
         
            </div>
            {/* </>
                )
                })} */}
                
                {/* <img src={bottom} className="imgbottom"/> */}
              </div>
               
           
          
          {/* <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div> */}
        </div>
        {/* <div className="bottom">
        <img src={bottom}/>
        </div> */}

      </div>
    

    </div>
  );
};

export default Single;