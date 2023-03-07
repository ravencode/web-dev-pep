//Temporal Dead Zone -> Area till the variable is declared for let and const
//means -> hoisting is ddone but you canr't access the undefined variable
//TDZ is not an error but just a safety measure
//Jabtk aapne let const me nhi likhdia na, tbtk aap vairable ko access nhi kr skate ho
console.log("hello");
console.log("varName on line number 4", varName);
//declare
let varName;
//default value is undefined [hoisting is there like in var]
// console.log("varName on line number 4", varName);
console.log("varName on line number 7", varName);
varName = 10;
varName = 20;
console.log("varName on line number 7", varName);
//you can't redeclare let variable
// let varName = 30;

//error is detected while hoisting [like redeclaration error]