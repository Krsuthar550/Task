if(process.env.NODE_ENV !=="production"){
    require("dotenv").config()
}



const express= require("express")
const {engine}=require("express-handlebars")
const mongoose=require("mongoose")
const methodoverride=require("method-override")
const taskRoute=require("./routes/taskrouter")

let app=express()
// mount templates engine

app.use(methodoverride("_method"))
mongoose.set("strictQuery",true)
mongoose.connect(process.env.MONGODB_URI,(err)=>{
    if(err) throw err
    console.log("db connected");
})

app.engine("handlebars",engine())
app.set("view engine","handlebars")



// mount route
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))
app.use("/tasks",taskRoute)




app.listen(process.env.PORT|| 5000,(err)=>{
    if(err) throw err
    console.log("this port running on port 5000....");
})