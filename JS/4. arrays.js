// //array declare
// // let arr = [];

let arr = [1, 2, 3, 4, 5];
console.log(arr);
// console.log(arr.length);
// let i = 0;
// while (i < arr.length) {
//     console.log(arr[i]);
//     i++;
// }


// // push, unshft
// // we can add multiple data type values in array
// arr.push("last value");
// arr.unshift("first value");
// console.log(arr);
// arr.shift();
// arr.pop();
// console.log(arr);

//slice - start idx, end idx
let partOfArr = arr.slice(2, 4);
console.log(partOfArr);
console.log(arr);

//splice - start idx, delete count
arr.splice(2, 1); //2nd index se 1 element delete
console.log(arr); 
//splice copy nahi banata, direct array me change kardera hai