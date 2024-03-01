const fs = require("fs") //inbuilt 

fs.writeFileSync("text.txt", "hey buddy") //create file if there is no file(text.txt), if file is present it will update

// fs.writeFile()

fs.appendFileSync("text.txt", "hello everyone")  //will update 

const data = fs.readFileSync("text.txt")
// console.log(data);  //will save data in binary
console.log(data.toString());

fs.unlinkSync("text.txt")