//child process
let cp = require("child_process");
// console.log("Trying to open calculator");
// cp.execSync("calc");
// console.log("Calculator opened");

// console.log("Trying to open VS code");
// cp.execSync("code");
// console.log("VS Code opened");

console.log("Trying to open india.com");
cp.execSync("start chrome https:\\www.india.com/");
console.log("website opened");
let output = cp.execSync("node NodeJS/abc.js");
console.log("Output is", output+""); 