// //types in JS:
// //1. Primtive, 2. Non-Primitive
// //1. Primitive: Atomic types, inko aur break nahi kara jaa sakta
// //2. Non-Primitive: array, object, function

// //functions

// // no need to type return type

// function sayHi(param) { //function definition
//     console.log("Hello World");
//     console.log("Param is", param);
// }

// sayHi(); //function call

// //we can pass any type of var im this function 
// sayHi(10);
// sayHi("Hello");
// sayHi(true);
// sayHi(null);
// sayHi([1, 2, 3, 4, 5]);
// return "returned from a function";


//function with return type
function sayHi2(param2) {
    // console.log("Hello World");
    // console.log("Param is", param);
    let rVal = Math.random() > 0.5 ? true : "less than 0.5";
    return rVal;  
}

let val1 = sayHi2([1, 2, 3, 4, 5]);
console.log(val1);