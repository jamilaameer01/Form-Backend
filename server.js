require('dotenv').config();

const express = require('express')
const mongoose = require('mongoose')
const formRoutes = require('./routes/formRoutes')

const app = express()

// middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})
// routes
app.use('/api/forms' , formRoutes)

// connect to db

mongoose.connect(process.env.MONGODB_URI)
.then(() => {
 // listen for request
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server running on port & connecting to db  ${port}`);
});
   
})
.catch((error) =>{
    console.log(error)
})