// const fs = require('fs');
// console.log("Before");
// let data = fs.readFileSync('f1.txt');
// console.log(data + "");
// console.log("After");
// console.log("mean while");

// // you can't do this for ex in flipkart big billion day, can;t do this bevuse server will crash


// So javascipt provides us a way to do this asyncronously
const fs = require('fs');
console.log("Before");
fs.readFile('f1.txt', cb); // async function
function cb(error, data) {
    if (error) {
        console.log(error);
    }else{
        console.log("data" + data);
    }
} 
console.log("After");
console.log("mean while");

// async function is better because it doesn't block the main thread
// this means file read karna start ho jayega but main thread will not wait for it to complete, end me aayega

// //output is
// Before
// After
// mean while
// dataI am F1

//as