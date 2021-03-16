const addition = require("./export");
const path = require("path");

console.log(addition.add(10, 5));

let myPath = "/Users/hunter/Documents/cbc11/Week-8/TEST/hello.txt";
console.log(myPath);

let pathObject = path.parse(myPath);
console.log(pathObject);
