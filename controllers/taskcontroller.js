const taskModel=require("../models/task")

const getTasks=async(req,res)=>{
    // res.status(200).json({task:"reading"})
    let data=await taskModel.find().lean()
    console.log(data);
    res.render("home",{data})
    
}
const createTask=async (req,res)=>{
   let payload={
    task:await req.body.task
   }
   await taskModel.create(payload)
   res.redirect("/tasks")
    
}

const getTask=async(req,res)=>{
    let id=await req.params.id
    let updatedata=await taskModel.findOne({_id:id}).lean()
    res.render("edit",{updatedata})
}

const updateTask=async(req,res)=>{
    let payload={task: await req.body.task}
    await taskModel.updateOne({_id:req.params.id},{$set:payload})
    res.redirect("/tasks")

    
}
const deleteTask=async(req,res)=>{
   await taskModel.deleteOne({_id:req.params.id})
    res.redirect("/tasks")
    
}

module.exports={
    createTask,
    getTasks,
    getTask,
    updateTask,
    deleteTask
}