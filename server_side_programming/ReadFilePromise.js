const fs = require("fs").promises;

// with promise
fs.readFile("./demo.txt", "utf-8")
    .then(data => console.log("data with promise => ", data.toString()));

// with async & await
async function readDemo()
{
    let data = await fs.readFile("./demo.txt", "utf-8");
    console.log("data with async & await => ", data.toString());
}
readDemo();

console.log("done"); 