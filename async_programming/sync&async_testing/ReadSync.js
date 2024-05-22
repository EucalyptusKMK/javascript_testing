const fs = require("fs");
let start = new Date();

try
{
    const data = fs.readFileSync("text.txt", "utf8");
    const data2 = fs.readFileSync("text2.txt", "utf8");
    let end = new Date(); 
    let time = end - start;
    console.log("time duration => ", time);
}
catch(err)
{
    console.log("error => ", err);
}