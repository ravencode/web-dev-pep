//path module -> work with paths
let path = require("path");

//path functions
//1. path.join() -> join two or more paths
//2. path.extname() -> get the extension of a file
//3. path.basename() -> get the base name of a file
// __dirname -> current directory

let ext = path.extname(path.join(__dirname, "1.1 abc.js"));
console.log("ext", ext);
let name = path.basename(__dirname);
console.log("name", name);
name = path.basename(path.join(__dirname, "1.1 abc.js"));
console.log("name", name);