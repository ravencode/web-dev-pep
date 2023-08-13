//real life example of promise -> token system in gurudwara
//slipper and token exchanged
//promise emulates the token
//promise is a placeholder for a future value

//example
let fs = require("fs");

//async code
console.log("before");
// fs.readFile("f1.txt",function(err,data){
//         console.log(data+"");
// });

//therea are two states of promise
//1. pending
//2. settled -> resolved or rejected

let promise = fs.promises.readFile("f1.txt");
console.log(promise);

//promise is settled
promise.then(function(data){
    console.log(data+"");
});
//rejected
promise.catch(function(err){
    console.log(err);
});
console.log("after");


//promise defination -> promise is an object that holds the eventual result of an async operation
//promise is a placeholder for a future value
//promise is a state machine
//states -> pending, resolved, rejected
//scb -> success callback
//fcb -> failure callback
//then() -> then() will be called when promise is resolved
//catch() -> catch() will be called when promise is rejected
//then() and catch() can only be called on pending promise
//then() and catch() are also async functions
//then() and catch() will always return a pending promise whose state depends upon the state of the promise on which they are called
//then() and catch() can be chained
//then() and catch() are also async functions
//then() and catch() are also attached to the pending promise
//then() and catch() can only be called on pending promise