import "./new.scss";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import Button from '@mui/material/Button';
import axios from "axios"
import {useState, useEffect} from "react"
import {useParams, useNavigate} from "react-router-dom"
import { responsiveProperty } from "@mui/material/styles/cssUtils";

const EditProduct = ({ inputs}) => {
    const [file, setFile] = useState("");
  const {id} = useParams();
  console.log(id)
  const history = useNavigate();
  const [name, setName] = useState("");
  const [interest,setInterest] = useState("");
    const user = localStorage.getItem('id')
  const [product, setProduct] = useState({})

  useEffect(()=>{
    axios.get('http://localhost:5000/maricredit/products/'+id+"/"+user)
    .then((response)=>{
      setProduct(response.data.product)
      console.log(response.data.product)
    })
  },[])

   const handleSubmit = async(event)=>{
    event.preventDefault();
    try{
  const response = await axios.put("http://localhost:5000/maricredit/products/"+id+"/"+user,{
     name:name,
     interest:interest,
    });
    if(response){
      history('/products')
      window.location.reload()
    }
    }catch(err){
      console.log(err)
    }
   }
   const handleCancel = ()=>{
    history("/products")
   }
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Edit Product Information</h1>
        </div>
        <div className="bottom">
    
        <div className="right">
            <form onSubmit={handleSubmit}>
              <div className="formInput">
                <label>Product Name</label>
                <input type="text"  onChange={(event)=>setName(event.target.value)} 
                placeholder={product.name}/>
                <label>Interest</label>
                <input type="number" value={interest} placeholder={product.interest} onChange={(event)=>setInterest(event.target.value)} />
                
             
                
              </div>
           <div className="form-input" style={{marginLeft:"850px"}}>
           <Button type="submit" variant="contained" color="success" className="send"  >Save</Button>

            <Button type="submit" onClick={handleCancel} variant="contained" color="warning" className="send">Cancel</Button>
               </div>
            </form>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default EditProduct;