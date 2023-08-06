//Higher order functions -> functions which take other functions as arguments or return functions as values
//Three main higher order functions -> map, filter, reduce
// check intro.png

//map, filter, reduce 


//1. map 
let myArr = [1, 2, 3, 4, 5];
let newArr = myArr.map(function(x){
    return x * x;
})
// or let newArr = myArr.map((x) => x * x);

console.log(myArr);
console.log(newArr);


//2. filter

let filterArr = myArr.filter(function(x){
    return x % 2 === 0;
})

console.log(filterArr);


//3. reduce

let reduceArr = myArr.reduce(function(accumulator, x){
    return accumulator + x;
}
, 0)

console.log(reduceArr);

