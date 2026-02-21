/*
The path module in Node.js is a built-in module used to work with file and directory paths.

It helps you:
	•	Join paths safely
	•	Get file names
	•	Get extensions
	•	Normalize paths
	•	Avoid OS path errors (Windows vs Mac vs Linux)
*/
const path = require("path");

console.log(path.sep);

const filePath = path.join("/content", "subfolder", "test.txt");
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");

console.log(absolute);