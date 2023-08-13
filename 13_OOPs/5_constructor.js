//constructor functions
function car(name, model, color) {
    this.name = name;
    this.model = model;
    this.color = color;
    this.getName = function () {
        return this.name;
    }
}

let car1 = new car("BMW", "X5", "Black"); //this will return an empty object
let car2 = new car("Audi", "A6", "White"); 

car1.name = "jaquar"; //this will change the name of car1
console.log(car1);
console.log(car1.color);
console.log(car2);
console.log(car2.getName());