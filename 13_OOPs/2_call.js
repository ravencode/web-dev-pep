// call, apply and bind methods -> these are the methods of function object

// call
let person1 = {
    firstName: 'John',
    age: 20,

    showDetails1: function() {
        console.log(this.firstName, this.age);
    }
}


let person2 = {
    firstName: 'Jane',
    age: 22
}

let showDetails2 = function() {
    console.log(this.firstName, this.age);
}

person1.showDetails1(); // John 20

//function borrowing
person1.showDetails1.call(person2); // Jane 22 -> call method is used to call a function with a different object

showDetails2.call(person2); // Jane 22 


let showDetails3 = function(city, car) {
    console.log(`${this.firstName} is ${this.age} years old and lives in ${city} and drives ${car}`);
}

showDetails3.call(person2, 'New York', 'BMW'); // Jane is 22 years old and lives in New York and drives BMW

