const fs = require("fs");

fs.readFile("./demo.txt", "utf-8", (err, data) => {
    if (!err)
    {
        console.log("data => ", data.toString());
    }
});

console.log("done")