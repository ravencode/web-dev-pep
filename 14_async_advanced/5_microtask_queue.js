console.log("Program Starts");

setTimeout(() => {
    console.log(
        'I am setTimeout')
}, 1000);

Promise.resolve().then((val) => {
    console.log("Promise output");
});


console.log("Program Ends");


// Output:
// Program Starts
// Program Ends
// Promise output
// I am setTimeout

// Explanation:
// The output is not as expected. The setTimeout() is executed before the Promise. 
// This is because the setTimeout() is added to the callback queue and the Promise is added to the microtask queue. 
// The microtask queue is executed before the callback queue. Hence, the Promise is executed before the setTimeout().