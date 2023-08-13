// Prototypal inheritance
let person1 = {
    name: 'John',
    age: 26,
    
    showDetails: function() {
        console.log(`${this.name} is ${this.age} years old.`);
    }
};

// person1.showDetails(); // John is 26 years old.

let person2 = {
    name: 'Sania'
}

person2.__proto__ = person1;

console.log(person2.name + ' is ' + person2.age + ' years old.'); // Jane is 26 years old. 

person2.showDetails(); // Sania is 26 years old.

// Prototypal inheritance 