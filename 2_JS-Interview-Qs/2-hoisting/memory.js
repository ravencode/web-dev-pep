//windows
// console.log(global)

// node
// console.log(this)

// the code which is not inside any function is part of global scope
// the wrapper is called global execution context


// below example is example of hoisting
fn();
function fn() {
    console.log("Hello from fn");
}
fn();