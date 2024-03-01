//create a 
// normal 
//html
//json object

const http = require('http');

const PORT = 4000
//normal object 
const Obj = {
    name : "Manoj",
    age : 23
}
//Json Object
const JSONObj = {
    "name" : "Manoj",
    "age" : 23
}
http.createServer((request, response)=>{  //first parameter always request, then response
    console.log(request.url, request.method);
    // request.method
    if(request.url === "/post" && request.method === 'GET'){
        response.write("this is post page")
        response.end()
    }else if(request.url === "/comment" && request.method === 'POST'){
        //logic
        response.write("<a href=`/post`>comments page</a>")
        response.end()
    }else if(request.url === '/jsondata'){
        const data = JSON.stringify(JSONObj)
        response.write(data)
        response.end()
    }
}).listen(PORT, ()=>{
    try{
        console.log(`server is running in ${PORT}`);
    }
    catch(err){
        console.log(err, "error during starting the server");
    }
})
    

