const mongoose=require("mongoose")

const schema=mongoose.Schema;

const todoschema=new schema({
    userName:String,
    mobile:String,
})
const Todo=mongoose.model("Todo",todoschema)
module.exports=Todo
