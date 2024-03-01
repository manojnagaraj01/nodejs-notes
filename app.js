const express = require("express")

const userRouter = require("./router/userRoute");
const blogRoute = require("./router/blogRouter")
const app = express()  //MVC : Model , View, Controller

const cors = require("cors") //third party library //always call above 

app.use(cors({
    // origin:"http://localhost:5000"
    // origin:["http://localhost:5000", "https:// "]
     // origin:"*" //allow for everyone
}))
app.use("/user", userRouter)
app.use("/blog", blogRoute)


app.listen(5000, ()=>{
    try{
        console.log("server is running in 5000");
    }
    catch (err){
        console.log(err, "error while loading");
    }
})


// For user router: what are the routing endpoint
//register or signup
//login or signin
//logout

//for blog routing : what is the file name:
//createblog
//updateBlog
//deleteBlog
//getBlog

//CORS : Cross Origin Resources Sharing //third party module :  npm install cors