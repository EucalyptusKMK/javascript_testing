const fs = require("fs");
let start = new Date();

let p1 = fs.promises.readFile("text.txt", "utf8");
let p2 = fs.promises.readFile("text2.txt", "utf8");
Promise
        .all([p1, p2])
        .then(data => {
            let end = new Date();
            let time = end - start;
            console.log("time => ", time);
        });