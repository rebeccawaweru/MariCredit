import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import {positions} from '@mui/system'

export default function CircularIndeterminate() {
  return (
    <Box 
    display = 'flex'
    right="50%"
     top= "50%"
     m="auto"
     position= "absolute">
      <CircularProgress  color="success" />
    </Box>
  
  );
}