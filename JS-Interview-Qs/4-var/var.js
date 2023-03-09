// 2015 es6
//var works in two terms
//1. hoisting
console.log("line number 1", varName);
// declare
var varName;
// assign
varName = 10;
console.log("line number 8", varName);
// reassign
varName = 20;
console.log("line number 12", varName);
// redeclare
var varName = 30;
console.log("line number 15", varName);
var varName;
console.log("line number 17", varName);


//Scope of var
//Jab bhi ex execution context banta hai, tabhi var ke liye memory allocate hota hai [hoisting]
// var is function scoped