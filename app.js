require('dotenv').config();
const express = require('express');
const cors = require('cors');
// const notFound = require('./middleware/notFound')
// const errorHandler = require('./middleware/errorhandler')

require('express-async-errors')

const app = express();
const connectDB = require('./db/connect')

//routes
const authRouter = require('./routes/auth')
const loansRouter = require('./routes/loans')
const productRouter = require('./routes/products')
const paymentRouter = require('./routes/payment')

//errors
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

//middleware
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: false }));// put true for nested objects/arrays inputs
app.use('/maricredit/auth', authRouter)
app.use('/maricredit/loans', loansRouter)
app.use('/maricredit/products', productRouter)
app.use('/maricredit/payments', paymentRouter)

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

// app.use(express.static('./public'))
// app.use('/api/v1', mainRouter)




// app.listen(port, ()=>{
//     console.log(`Server is listening on port ${port}.......`);
//  })

const port = process.env.PORT || 8080
app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}.......`);
 })
// const start = async()=>{
//     try{
//      await connectDB(process.env.MONGO_URI)
//      app.listen(port, ()=>{
//         console.log(`Server is listening on port ${port}.......`);
//      })
//     }catch(err){
//         console.log(err);
//     }
// }

// start()

