//mutability vs immutability
//mutability -> changeable
//immutability -> unchangeable

//functional programming is based on immutability

//mutability
const person1 = {
    name: 'John',
    age: 20
}

const person2 = person1;
person1.age = 30; //change in person1 will also reflect in person2, these are reference types

console.log(person1, person2);

//immutability, there ways to make objects immutable like using deep copy, Object.assign, spread operator

const person3 = {
    name: 'Bharat',
    age: 20
}

const person4 = Object.assign({}, person3); // or using spread operator -> const person4 = {...person3};
person4.age = 30; 

console.log(person3, person4);
