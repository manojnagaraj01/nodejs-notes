// const express = require("express")
// const route = express.Router()
// or

const route = require("express").Router()

route.get("/resgister", (req, res)=>{
    return res.send("user registered sucessfully")
})
route.get("/login", (req, res)=>{
    return res.send("user login successfully")
})

module.exports = route;

// http://localhost:5000/user/register
//http://localhost:5000/user/login