const EventEmitter = require("events"); 
const eventEmitter = new EventEmitter();

eventEmitter.on("customEvent", (event) => {
    console.log("customEvent fired => ", event);
}); 

setTimeout(() => {
    eventEmitter.emit("customEvent", {
        data : "kaung myat kyaw"
    })
}, 3000);

console.log("done");

eventEmitter.on("customEvent", (event) => {
    console.log("customEvent fired 2 => ", event);
}); 
