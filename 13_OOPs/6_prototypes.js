//prototype in javascript
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr.__proto__ === Array.prototype); //true
console.log(arr.__proto__.__proto__ === Object.prototype); //true
console.log(arr.__proto__.__proto__.__proto__); //null

let person1 = {
    name: "John",
    age: 20,
    
    showDetails: function() {
        console.log(this.name, this.age);
    }
}

console.log(person1.__proto__ === Object.prototype); //true
console.log(person1.__proto__.__proto__); //null