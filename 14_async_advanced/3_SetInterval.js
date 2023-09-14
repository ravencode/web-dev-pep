// // SetInterval 
// function sayHello() {
//     console.log('Hello');
// }

// sayHello();// Hello
// setInterval(sayHello, 1000);// Hello will be printed every 1 second till the program is running


//to stop at a certain point
let counter = 0;
let intervalId;

function sayHello() {
    counter++;
    console.log('Hello');

    if (counter >= 3) {
        clearInterval(intervalId);
    }
}

intervalId = setInterval(sayHello, 1000);// Hello will be printed every 1 second till the program is running
