/* 
A module is simply:

A separate file that contains code (functions, variables, objects) which you can export and reuse in other files.

Node.js uses modules to organize code.

Create a file named math.js and add the following code:

// math.js
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

module.exports = { add, subtract };

Now, in your main file (app.js), you can import and use the math module:

// app.js
const math = require('./math');

const sum = math.add(5, 3);
const difference = math.subtract(5, 3);

console.log('Sum:', sum); // Output: Sum: 8
console.log('Difference:', difference); // Output: Difference: 2

Types of Modules in Node.js:

1. Core Modules: Built-in modules provided by Node.js (e.g., fs, http, path).
2. Local Modules: Custom modules created by you (e.g., math.js).
3. Third-Party Modules: Modules installed from npm (Node Package Manager) (e.g., express, lodash).

*/

// Example of os module 
import os from "os";

console.log("Platform:", os.platform());
console.log("CPU:", os.arch());
console.log("Total RAM (GB):", (os.totalmem() / 1e9).toFixed(2));
console.log("Free RAM (GB):", (os.freemem() / 1e9).toFixed(2));
console.log("Home Directory:", os.homedir());
