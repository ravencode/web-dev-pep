//bind 

let person2 = {
    firstName: 'Jane',
    age: 22
}


let showDetails3 = function(city, car) {
    console.log(`${this.firstName} is ${this.age} years old and lives in ${city} and drives ${car}`);
}

showDetails3.bind(person2, 'New York', 'BMW'); // no output because bind method returns a function, it does not call the function

let showDetails4 = showDetails3.bind(person2, 'New York', 'BMW');
showDetails4(); // Jane is 22 years old and lives in New York and drives BMW
