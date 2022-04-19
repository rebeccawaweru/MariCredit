import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CustomList from "./Customlist";
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import MoodIcon from '@mui/icons-material/Mood';
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { Badge, Tooltip,Drawer, Typography, Avatar,Box,Divider} from "@mui/material";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import {useEffect, useState} from "react";
import { useNavigate} from "react-router-dom";
import jwt from "jsonwebtoken";
import axios from "axios"
const Sidebar2 = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <Box sx={{width:200, height:100,  justifyContent:"center", alignItems:"center", flex:1}}>
        <Box sx={{mt:3}}>
        <Typography variant="h6" component="p" sx={{textAlign:"center"}}>MariCredit</Typography>
        <Divider/>
        <List sx={{justifyContent:"center", alignCenter:"center"}}>
          <ListItem sx={{backgroundColor:"whitesmoke", borderRadius:10, mt:2, mb:5,mx:3, height:50,width:200}}>
            <ListItemButton>
              <ListItemIcon>
              <DashboardIcon color="success"/>
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
          <ListItem sx={{backgroundColor:"whitesmoke", borderRadius:10, mt:2, mb:5,mx:3,  height:50,width:200}}>
            <ListItemButton>
              <ListItemIcon>
              <PersonOutlineIcon color="success"/>
              </ListItemIcon>
              <ListItemText primary="Users" />
            </ListItemButton>
          </ListItem>
          <ListItem sx={{backgroundColor:"whitesmoke", borderRadius:10, mt:2, mb:5,mx:3,  height:50,width:200}}>
            <ListItemButton>
              <ListItemIcon>
                <StoreIcon color="success"/>
              </ListItemIcon>
              <ListItemText primary=" Products" />
            </ListItemButton>
          </ListItem>
          <ListItem sx={{backgroundColor:"whitesmoke", borderRadius:10, mt:2, mb:5,mx:3,  height:50,width:200}}>
            <ListItemButton>
              <ListItemIcon>
                <CreditCardIcon color="success" />
              </ListItemIcon>
              <ListItemText primary="Loans" />
            </ListItemButton>
          </ListItem>
          <ListItem sx={{backgroundColor:"whitesmoke", borderRadius:10, mt:2, mb:5,mx:3,  height:50,width:200}}>
            <ListItemButton>
              <ListItemIcon>
                <LocalShippingIcon color="success" />
              </ListItemIcon>
              <ListItemText primary="Payments" />
            </ListItemButton>
          </ListItem>
          <ListItem elevation={5} sx={{backgroundColor:"whitesmoke", borderRadius:10, mt:2, mb:5,mx:3,  height:50,width:200}}>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon  color="success" />
              </ListItemIcon>
              <ListItemText primary="Messages" />
            </ListItemButton>
          </ListItem>
          <ListItem elevation={5} sx={{backgroundColor:"whitesmoke", borderRadius:10, mt:2, mb:5,mx:3,  height:50,width:200}}>
            <ListItemButton>
              <ListItemIcon>
                <InsertChartIcon    color="success" />
              </ListItemIcon>
              <ListItemText primary="Reports" />
            </ListItemButton>
          </ListItem>
        </List>
        </Box>

    </Box>
  );
};

export default Sidebar2;