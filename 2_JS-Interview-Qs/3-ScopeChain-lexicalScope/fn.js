console.log("line number 1", varName);
var varName = 10;
// fn b definition
function b() {
    console.log("line number 5", varName);
}
console.log("line number 7", varName);
function fn() {
    console.log("line number 9", varName);
    var varName = 20;
    // from fn
    b();
    console.log("line number 13",varName);
}
fn();


//lexical scope means it will look for the variable in the current scope 
//and if not found then it will look for the variable in the parent scope
//and so on till it finds the variable or reaches the global scope


// JavaScript uses lexical scoping to resolve the variable names when a function 
// is created inside another function. It determines the function's parent scope by 
// looking at where the function was created instead of where it was invoked.


//scope chain is the order in which the scope is searched for the variable

//scope chain is created at the time of creation of execution context
//scope chain is created in the order in which the scope is created

//in a new function the previous scope is not available 
//i.e variable declared in the previous scope is not available in the new scope, so undefined
