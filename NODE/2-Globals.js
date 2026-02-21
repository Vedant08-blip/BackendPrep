/* 
Globals --> No Windows, No DOM, No BOM, No Browser APIs
__dirname --> path of the current directory
__filename --> path of the current file
require --> function to import modules (CommonJS)
module --> object representing the current module
exports --> object to export from the current module
process --> object providing information about the current Node.js process 'IMPORTANT'
*/

console.log("__dirname:", __dirname);
console.log("__filename:", __filename);
setInterval(() => {
    console.log("Hello, World!");
}, 1000);

setTimeout(() => {
    console.log("This will be printed after 5 seconds");
}, 5000);