import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import MoodIcon from '@mui/icons-material/Mood';
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import {useEffect, useState} from "react";
import { useNavigate} from "react-router-dom";
import jwt from "jsonwebtoken";
import axios from "axios"
const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);
  const [name, setName] = useState("");
 
  const history = useNavigate();  
  useEffect(()=>{
    const token = localStorage.getItem('accesstoken') 
    if(token){
      const user = jwt.decode(token)
      axios.get('http://localhost:5000/maricredit/auth/'+user.id)
      .then((response)=>{
        setName(response.data.user.fullname)
      
      })
     
      localStorage.setItem('id', user.id)
      if(!user){
        localStorage.removeItem('accesstoken')
        history('/login')
      }
    }
  },[])
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
          Welcome {name} 
          <MoodIcon className="icon"/>
          </div>
          {/* <div className="item">
            <DarkModeOutlinedIcon
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div> */}
          {/* <div className="item">
            <FullscreenExitOutlinedIcon className="icon" />
          </div> */}
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div>
          {/* <div className="item">
            <ListOutlinedIcon className="icon" />
          </div> */}
          <div className="item">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;