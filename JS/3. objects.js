// also known as dictionary i python and hashmap in java
// java me static hota hai, JS me dynamic hota hai

// Object is ust a group of key : value pairs
//Key : value pair is called property
//Key : function pair is called method

let cap = {
    name : "Steve",
    lastName : "Rogers",
    address : {
        state : "New York",
        city : "Manhattan"
    },
    age : 35,
    isAvenger : true,
    movies : ["Civil War", "Infinity War", "Endgame"],
    sayHi : function(){
        console.log("Cap says Hi");
    }
};

//Get key
// console.log(cap.name);
// console.log(cap.age);
// console.log(cap.movies[1]);
// cap.sayHi();

// //set/update key
// console.log("cap", cap);
// cap.age = 40;
// cap.isAvenger = false;
// cap.friends = ["Tony", "Thor", "Natasha"];
// console.log(" ------------------------- ");
// //delete
// delete cap.age;
// console.log("cap", cap);

//loop in object
for(let key in cap){
    console.log(key, " : ", cap[key]);
}

//what is this [] notation
let propKey = "age";
console.log(cap[propKey]); //varible ke andar padi hui value ko get karta hai and uss value ko object me dhundhta hai
//[] vs . notation
console.log(cap.age); //dot isko seedha hi as avlue ki tarah treat karta hai 

//if you dont have a key 
console.log(cap.fName); //undefined
