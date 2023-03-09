// //Similar to let but
// //You have to initialize const, can't just declare
// const a = 10;
// // you can't redeclare❌ and reassign const❌
// console.log(a);

// //Other properties are similar to let, like TDZ

const arr = [1, 2, 3, 4, 5];
// arr.push(6);
// console.log(arr);
// arr=4; //error
arr.shift(); // to remove the first element
console.log(arr); // no error
//question is -> are there arrays in javascript?