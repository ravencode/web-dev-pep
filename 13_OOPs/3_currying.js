// 1. Currying is a technique of evaluating function with multiple arguments, into sequence of function with single argument.
// 2. In other words, when a function, instead of taking all arguments at one time, takes the first one and return a new function that 
//    takes the second one and returns a new function which takes the third one, and so forth, until all arguments have been fulfilled.
// 3. Currying is a transformation of functions that translates a function from callable as f(a, b, c) into callable as f(a)(b)(c).
// 4. Currying doesn’t call a function. It just transforms it.
// 5. Currying is a way of constructing functions that allows partial application of a function’s arguments.


// Function currying with bind method
// 1. using bind method
function add(a, b) {
    console.log(a + b);
}

let addWith2 = add.bind(this, 2);
addWith2(3);

let addWith = add.bind(this);
addWith(2, 3);

let addWit = add.bind(this, 2, 3);
addWit();

// 2. using closure
function multi2(a) {
    return function(b) {
        console.log(a * b);
    }
}

let multiWith2 = multi2(2);
multiWith2(3);


