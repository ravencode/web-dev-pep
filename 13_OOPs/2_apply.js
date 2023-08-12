//apply 

let person2 = {
    firstName: 'Jane',
    age: 22
}


let showDetails3 = function(city, car) {
    console.log(`${this.firstName} is ${this.age} years old and lives in ${city} and drives ${car}`);
}

showDetails3.apply(person2, ['New York', 'BMW']); // in call method, we pass the arguments one by one, but in apply method, we pass the arguments as an array