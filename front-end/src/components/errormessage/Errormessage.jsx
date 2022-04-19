// import React from "react";
// import {Alert} from "react-bootstrap";

// const ErrorMessage = ({variant="danger", children})=>{
//     return(
//         <div>
//      <Alert variant={variant} style={{fontSize:20}}>

//       <strong>{children}</strong>
//       </Alert>
//         </div>
     
//     )
// }

// export default ErrorMessage;

import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function ErrorMessage({children}) {
  return (
    <Stack sx={{ width: '100%',  mb: 3 }} spacing={2}>
  
      <Alert severity="warning">
          <strong>{children}</strong>
      </Alert>
   
    </Stack>
  );
}