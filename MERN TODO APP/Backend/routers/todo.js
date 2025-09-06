const express=require("express")
const {createTodo,getTodo,updateTodo,deleteTodo}=require("../controllers/todo")
const router=express.Router()
router.get("/",getTodo)
router.post("/",createTodo)
router.put("/",updateTodo)
router.delete("/",deleteTodo)
module.exports=router;