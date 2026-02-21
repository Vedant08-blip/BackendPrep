
// The os module in Node.js is a built-in module that gives information about your operating system.
// Example of os module 
import os from "os";

console.log("Platform:", os.platform());
console.log("CPU:", os.arch());
console.log("Total RAM (GB):", (os.totalmem() / 1e9).toFixed(2));
console.log("Free RAM (GB):", (os.freemem() / 1e9).toFixed(2));
console.log("Home Directory:", os.homedir());