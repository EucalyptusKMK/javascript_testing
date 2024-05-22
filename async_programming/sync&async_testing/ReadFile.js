const fs = require("fs");
console.log("start!");
fs.readFile("hello.txt", "utf-8", (err, data) => {
    if (!err)
    {
        console.log("data => ", data.toString());
    }
});
console.log("end!");