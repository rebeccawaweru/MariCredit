import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import Button from '@mui/material/Button';
import axios from "axios"
import {useState, useEffect} from "react"
import {useParams, useNavigate} from "react-router-dom"
import { responsiveProperty } from "@mui/material/styles/cssUtils";
const New = ({ inputs}) => {
  const [file, setFile] = useState("");
  const { userId } = useParams();
  const history = useNavigate();
  const [name, setName] = useState("");
  const [phonenumber, setPhonenumber] = useState("")
  const [email, setEmail] = useState("");
  const [user, setUser] = useState({
   name:"",
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
   const handleSubmit = async(event)=>{
    event.preventDefault();
    try{
  const response = await axios.put("http://localhost:5000/maricredit/auth/"+userId,{
    fullname:name,
    phonenumber:phonenumber,
    email:email,
  
    });
    if(response){
      history(`/${userId}`)
    }
    }catch(err){
      console.log(err)
    }
   }
   const handleCancel = ()=>{
    history(`/${userId}`)
   }
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Edit Personal Information</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form onSubmit={handleSubmit}>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>
              <div className="formInput">
                {/* <label>First Name</label>
                <input type="text" placeholder="" /> */}

              </div>
              <div className="formInput">
                <label>Name</label>
                <input type="text" value={name} onChange={(event)=>setName(event.target.value)} 
                placeholder={user.fullname}/>
                {/* <label>Last Name</label>
                <input type="text" value={lastname} placeholder={user.lastname} onChange={(event)=>setLastname(event.target.value)} /> */}
                <label>Email</label>
                <input type="text" value={email} placeholder={user.email} onChange={(event)=>setEmail(event.target.value)} />
                <label>Phone</label>
                <input type="text" value={phonenumber} placeholder={user.phonenumber} onChange={(event)=>setPhonenumber(event.target.value)} />
                <Button type="submit" variant="contained" color="success" className="send">Save</Button>
                <Button type="submit" onClick={handleCancel} variant="contained" color="warning" className="send">Cancel</Button>
              </div>
              

              {/* {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))} */}
             
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;