/*
 Runs line by line
 Waits for one task to finish before moving to next
 Blocking behavior
 Not recommended for large files or heavy tasks
*/

const { readFileSync } = require('fs');

console.log("Start");

const data = readFileSync('./Content/FirstTextFile.txt', 'utf8');
console.log(data);

console.log("End");

/*
Why Sync is Blocking?

Imagine:
	•	100 users hit your backend
	•	One request uses readFileSync
	•	Other 99 users must wait 

That’s why sync is not used in production servers.

*/