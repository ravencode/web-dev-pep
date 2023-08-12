// polyfill of bind method -> implementation of bind method
// imp interview question

//in map, filter, reduce polyfill we used array prototype, but here we will use function prototype
//function prototype is used to add new methods to function


//original bind method
let person1 = {
    name: 'Rahul',
    age : 25
}

let showDetails = function(city, state){
    console.log(this.name + ' ' + this.age + ' ' + city + ' ' + state);
}

// let newShowDetails = showDetails.bind(person1, 'Noida', 'UP');
// newShowDetails();

// polyfill of bind method

Function.prototype.myBind = function(...args){
    let obj = this;
    let params = args.slice(1);
    return function(...args2){
        obj.apply(args[0], [...params, ...args2]);
    }
} 


let newShowDetails2 = showDetails.myBind(person1, 'Noida', 'UP');
newShowDetails2();