// making objects using classes
// there is no such thing as a class in JS 

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    showDetails(){
        console.log(`Name: ${this.name} Age: ${this.age}`);
    }
}

// const person1 = new Person('Xavier', 55);
// console.log(person1);
// person1.showDetails();


//classical inheritance

class PersonChild extends Person{
    constructor(){
        super('Xavier');
    }
}

let person2 = new PersonChild();
console.log(person2.name);