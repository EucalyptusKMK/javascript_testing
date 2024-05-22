const api = () => console.log("this is api function");
const internalApi = () => console.log("internal Api");
console.log("my module initialized!");
exports.api = api;
exports.DATA = "hello this is data";