//E5x05o3d5p4sY5aZ
 const express = require('express');
 const dotenv = require('dotenv');
 const db = require('./db/dbConnect');
 const { todoRoute } = require('./Route/todoRoute');
const cors = require('cors')
 //dotenv config
 dotenv.config();

 //connect db 
 db();

 const app = express();

 app.use(cors({
     origin:"https://mern-todolist.netlify.app"
 }))
 app.use(express.json());

 app.use('/api' , todoRoute)





 //server
 const PORT = process.env.PORT || 5000 ;

 app.listen(PORT , ()=>{
     console.log(`Server is conneceted successfully on port : ${PORT}`)
 })