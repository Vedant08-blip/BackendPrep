/* 
  Does NOT wait
  Non-blocking behavior
  Better for servers 🚀 
*/

const { readFile } = require('fs');

console.log("Start");

readFile('./Content/SecondTextFile.txt', 'utf8', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});

console.log("End");

/*
Why Async is Important for You

When you build:
	•	APIs with Express
	•	Database calls
	•	Authentication system
	•	AI integration
*/
