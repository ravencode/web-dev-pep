//closure flow -> function scope -> lexical scope -> closure


// //function scope
// function calculate(a, b){
//     let sum = a + b;
//     return sum;
// }

// console.log(calculate(2, 3));
// console.log(sum); // error -> because sum is not defined in global scope


// //lexical scope -> child function can access parent function scope
// function add(){
//     let a = 4;

//     function addChild(){
//         console.log(a + 5);
//     }

//     addChild();
// }

// add();

//closure -> child function can access parent function scope even after parent function is executed
// or a function bundled with its lexical scope is called closure
function add(){
    let a = 4;

    function addChild(){
        console.log(a + 5);
    }

    return addChild;
}

let child = add();

console.dir(child); // here we can see the closure property
child();