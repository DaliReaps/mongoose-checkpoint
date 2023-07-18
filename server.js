const express= require("express")
const app=express()
const port=20000
app.use(express.json())
const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://DaliReaps:DaliReaps1212@cluster0.y4opfn8.mongodb.net/f4?retryWrites=true&w=majority").then(()=>{
    console.log("connected successfully")})
app.listen(port,(err)=>{(err)? console.log(err) : console.log("server is running on port",port)})
app.use("/",require("./routes/person"))

