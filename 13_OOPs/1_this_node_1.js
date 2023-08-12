//This keyword -> we will the behaviour of this keyword in different scenarios
//enviroment -> browser in strict mode, non-strict mode and node in strict mode, non-strict mode

// //non-strict mode
// a = 10;
// console.log(a); //10 

// //strict mode
// 'use strict';
// b = 20;
// console.log(b); //ReferenceError: b is not defined  



//This in node in non-strict mode   

// we will talk about in non-strict mode:
// 1. console.log(this);
// 2. function -> console.log(this);
// 3. object -> function 
// 4. object -> function -> function


// //1. console.log(this);
// console.log(this); //{} -> returns an empty object

// //2. function -> console.log(this);
// function abc() {
//     console.log(this);
// }
// abc(); // returns a global object

// //3. object -> function
// let obj = {
//     name: 'Rahul',
//     abc: function () {
//         console.log(this);
//     }
// }
// obj.abc(); //returns the object itself

//4. object -> function -> function

let obj = {
    name: 'Rahul',
    abc: function () {
        console.log(this);
        function xyz() {
            console.log(this);
        }
        xyz();
    }
}
obj.abc(); //returns the global object