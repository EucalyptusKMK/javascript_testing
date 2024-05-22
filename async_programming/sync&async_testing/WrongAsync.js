const fs = require("fs");
console.log("start!");
let start = new Date();
fs.readFile("hello.txt", "utf-8", (err, data) => {
    if (!err)
    {
        fs.readFile("goodbye.txt", "utf-8", (err2, data2) => {
            if (!err2)
            {
                console.log("data1.length => ", data.toString().length);
                console.log("data2.length => ", data2.toString().length);
                let end = new Date();
                let time = end - start;
                console.log("time => ", time);
            }
        });
    }
});
console.log("end!");