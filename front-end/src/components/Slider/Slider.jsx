import React from 'react'
import {Carousel} from 'react-bootstrap'
import {Box,Grid, Typography,Button,Container,Avatar,Stack,Card,CardContent,Divider} from '@mui/material'
export default function Slider(){
    return(
        <div>
    <Carousel>
  

  <Carousel.Item interval={500}>
   <Card>
   <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        </Typography>
        <Typography variant="h5" component="div">
        Rent Loan
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
         product
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
   </Card>

  
  </Carousel.Item>

  <Carousel.Item>
  <Card>
   <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        </Typography>
        <Typography variant="h5" component="div">
        Rent Loan
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
         product
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
   </Card>
  </Carousel.Item>
</Carousel>
        </div>
    )
}