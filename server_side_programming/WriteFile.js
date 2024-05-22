const fs = require("fs");

fs.writeFile("./demo2.txt", "Eucalyptus", (err, data) => {
    if (!err)
    {
        console.log("data => ", data);
    }
});

console.log("done")