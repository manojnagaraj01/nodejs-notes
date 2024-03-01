//npm install express
const express = require("express") //third party module/freamework
const {data , data2} = require("./Data")

const JSONObj = [{
    "name" : "Manoj",
    "age" : 23
}]
const app = express()
//app.http method("url path", callback function)
app.get("/comment", (req, res)=>{
    res.send(data2)  //no res.end like giving in http module
})
app.get("/register2", (req, res)=>{
    res.send("success2") 
})
app.get("/register3", (req, res)=>{
    res.send(JSONObj) 
})
app.delete("/register4", (req, res)=>{
    res.send("success2") 
})

app.listen(5000, ()=>{
    try{
        console.log("server is running in 5000");
    }
    catch (err){
        console.log(err, "error while loading");
    }
})

//create a express having 3 diff routing from diff files