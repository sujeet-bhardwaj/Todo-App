const Todo=require("../models/todo")
const getTodo=async(req,res)=>{
 try {
     const todos=await Todo.find({})
     res.send({status:"success",message:"Todo Get successfully",data:todos})
 } catch (error) {
     res.send({status:"error",message:"Todo Get failed",error})
 }
}

const createTodo=async(req,res)=>{
  const todo= new Todo(req.body)
 const result= await todo.save()
 console.log(result)
 try {
     res.send({status:"success",message:"Todo created successfully",result:{
        _id:result._id
     }})
 } catch (error) {
     res.send({status:"error",message:"Todo creation failed",error})
 }
}
const updateTodo=async(req,res)=>{
 try {
     const id=req.body._id;
    //  record find 
    const todo=await Todo.findById(id)

    //change set 
   todo.userName=req.body.userName
   todo.mobile=req.body.mobile
    //save
   await todo.save()
     res.send({status:"success",message:"Todo Updated  successfully"})
 } catch (error) {
     res.send({status:"error",message:"Todo Updated failed",error})
 }
}
const deleteTodo=async(req,res)=>{
 try {
    const id=req.body._id;
    console.log(id)
    const todo=await Todo.findByIdAndDelete(id); 

    
     res.send({status:"success",message:"Todo Deleted  successfully"})
 } catch (error) {
     res.send({status:"error",message:"Todo Deleted  failed",error})
 }
}
module.exports={createTodo,getTodo,updateTodo,deleteTodo}

