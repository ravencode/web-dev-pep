// //This in node in strict mode   
'use strict';
// // we will talk about in non-strict mode:
// // 1. console.log(this);
// // 2. function -> console.log(this);
// // 3. object -> function 
// // 4. object -> function -> function

// //1. console.log(this)

// console.log(this); //{} -> returns an empty object

// //2. function -> console.log(this);
// function abc() {
//     console.log(this);
// }
// abc(); // returns undefined


// //3. object -> function
// let obj1 = {
//     name: 'Rahul',
//     abc: function () {
//         console.log(this);
//     }
// }
// obj1.abc(); //returns the object itself


//4. object -> function -> function
let obj2 = {
    name: 'Rahul',
    abc: function () {
        function xyz() {
            console.log(this);
        }
        xyz();
    }
}
obj2.abc(); //returns undefined
