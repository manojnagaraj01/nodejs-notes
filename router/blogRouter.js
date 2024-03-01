// const express = require("express")
// const route = express.Router()
// or
 
const route = require("express").Router()

route.post("/createBlog", (req, res)=>{
    return res.send("Blog created sucessfully")
})
route.get("/getBlog", (req, res)=>{
    return res.send("fetch blog successfully")
})

module.exports = route;

//http://localhost:5000/blog/createblog
//http://localhost:5000/blog/getBlog