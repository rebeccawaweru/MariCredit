import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function CustomList({primary,secondary,name,src,onPress}) {
  return (
     <>
 <Typography variant="p" component="h4" sx={{mx:4,mb:2}}>{name}</Typography>
  <ListItem button onClick={onPress} alignItems="flex-start" sx={{mb:2, mx:4}}  style={{ backgroundColor:"whitesmoke",borderRadius:20,cursor:"pointer"}}>
 
</ListItem>
      {/* <Divider variant="inset" component="li" /> */}
 </>
  );
}
