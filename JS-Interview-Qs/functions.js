//Types of functions
// 1. FUNCTION STATEMENT
    // define
    // function sayHi(param) {
    //     console.log("Hi ", param);
    //     return 10;
    // }
    // invoke
    // sayHi(10);
    // console.log("--------------------");
    // sayHi("Hello");
    // console.log("--------------------");
    // sayHi(true);
    // console.log("--------------------");
    // sayHi(10.5);
    // console.log("--------------------");
    // sayHi([1, 2, 3]);
    // console.log("--------------------");
    // sayHi({ name: 'Bharat' });

    //without parameter passing
    // sayHi(); //Hi undefined

    //without return type
    // let rval = sayHi();
    // console.log("rval", rval); //undefined

// -------------------------------------------------------------------------------------

        // FUNCTIONS ARE FIRST CLASS CITIZENS -> Functions are treated as a variable
        // assignment
        // let a = [1, 2, 3, 4, 5];
        // let b = a;
        // console.log(b); //10

        // Jaise mai ek variable ka address kisi aur varible me put kar sakta hu, 
        // vaise hi mai ek function ka address kisi aur variable me put kar sakta hu -> funtion expression

// 2. FUNCTION EXPRESSION
    // let fnContainer = function fn(){
    //     console.log("I am expression")
    // }
    // //Is call ke upr function fn() wali definition chalegi (address passed)
    // fnContainer(); 

    // //Anonymous function
    // let fnContainer = function () {
    //     console.log("I am anonymous function");
    // }
    // //Is call ke upr function fn() wali definition chalegi (address passed)
    // fnContainer();
    
// 3. IIFE -> Immediately Invoked Function Expression
    //No need to call functio, it will be called automatically
    // (function fn(){
    //     console.log("I am IIFE");
    //     console.log("I will run automatically");
    // })();    

    //used in require, parameter pollution, closure

// 4. ARROW FUNCTION -> used to write concise function, react, this
    // let fn=(num) => {
    //     return num * num;
    // }
    // console.log(fn(5));

// FIRST CLASS CITIZENS
    // FUNCTIONS ARE FIRST CLASS CITIZENS -> Functions are treated as a variable
    //1.  assignment -> function expression
    //variable can be passed as a parameter
    //2. like this function can be passed as a parameter
    //callbacks, functional programming, higher order functions
    
    // function sayHi(param) {
    //     console.log("Hi ", param);
    //     param();
    //     return 10;
    // }
    // //address of function is passed
    // function small(){
    //     console.log("I am small");
    // }
    // // sayHi(10);
    // // let rval = sayHi(small);
    // console.log("rval", rval);

    //varible can be returned from a function
    //3. like this function can be returned from a function
    //closure
    function outer(){
        console.log("I am outer returning inner");
        return function inner() {
            console.log("I am inner");
        }
    }

    let ravl = outer();
    console.log("rval",ravl);
    ravl();