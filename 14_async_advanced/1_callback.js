// //synchrounous callback

// function greet(personName, age, callback, callback2) {
//     let msg = 'Hello ' + personName;
//     let agePerson = age;
// //   console.log(msg);    
//     callback(msg); 
//     callback2(agePerson);
// }

// // now i dont want to console log in greet function, so i will pass a callback function

// function logGreeting(greeting) {
//     console.log(greeting);
// }

// function showAge(age) {
//     console.log(age);
// }

// greet('John', 25,  logGreeting, showAge);

//asynchrounous callback
console.log('hello');


setTimeout(function st1(){
    console.log('i am st1');
}, 2000);

setTimeout(function st2(){
    console.log('i am st2');
}, 1000);



function sayBye(){
    console.log('bye');
}

sayBye(); 

//output:
// hello
// bye
// i am st2
// i am st1

//why this output?
//because setTimeout is a asynchrounous function, it will be executed after the main function is executed
//so first hello and bye will be printed and then st2 and st1 will be printed

//st1 and st2 will be in event loop and will be executed after the main function is executed
//st1 and st2 are in node api then callback queue and then event loop