const { readFileSync, writeFileSync, writeFile } = require('fs');

const first = readFileSync('./Content/FirstTextFile.txt', 'utf8');
const second = readFileSync('./Content/SecondTextFile.txt', 'utf8');

console.log(first, second);

writeFileSync('./Content/result-sync.txt', `Here is the result : ${first}, ${second}`);
