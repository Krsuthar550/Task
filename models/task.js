const {model,Schema}=require("mongoose")
const taskSchema=new Schema({
    task:{
        type:String,
        required:[true,"Please enter task"],
        trim:true
    },
    createAt:{
        type:Date,
        default:Date.now()
    }
})
module.exports=model("task",taskSchema)