const { readFileSync, writeFileSync, writeFile } = require('fs');

const first = readFileSync('./Content/FirstTextFile.txt', 'utf8');
const second = readFileSync('./Content/SecondTextFile.txt', 'utf8');

console.log(first, second);

writeFileSync('./Content/result-sync.txt', `Here is the result : ${first}, ${second}`);


// Read File 
const fs = require("fs");

fs.readFile("test.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});


// Write File
fs.writeFile("test.txt", "This is a test file", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("File written successfully");
});


//Append to File
fs.appendFile("test.txt", "\nNew Line Added", (err) => {
  if (err) throw err;
  console.log("Content appended");
});


// Delete File
fs.unlink("test.txt", (err) => {
  if (err) throw err;
  console.log("File deleted");
});
