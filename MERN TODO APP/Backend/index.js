const express=require("express")
const mongoose = require('mongoose');
const router=require("./routers/todo")
const app=express()
const cors = require('cors');
app.use(express.json())
app.use(cors());
app.use("/",router)

mongoose.connect("mongodb://localhost:27017/TODOAPP").then(
app.listen(3002,(err)=>{
  if(err){
    console.log("print the error",err)
  }
  else{
    console.log("server is running");
  }
})
).catch((err)=>{
    console.log("database not coonceted")
})





