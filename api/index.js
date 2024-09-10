

const express = require('express')
const mongoose = require('mongoose')
const formRoutes = require('./routes/formRoutes')

const app = express()

// middleware
app.use(express.json())
// app.use((req, res, next) => {
//     console.log(req.path, req.method)
//     next()
// })
// routes
app.use('/api/forms' , formRoutes)
app.get("/", (req,res)=>{
  res.send("Hello Pakistan")
})

// connect to db

mongoose.connect("mongodb+srv://javeriaameer793:fE8VEIYJivaVJcJj@cluster0.o01d9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
 // listen for request
const port = 4000;
app.listen(port, () => {
  console.log(`Server running on port & connecting to db  ${port}`);
});
   
})
.catch((error) =>{
    console.log(error)
})