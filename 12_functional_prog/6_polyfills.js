//polyfills are the imperative code or the logic behind the functional programming
//polyfills for map, filter, reduce

//Mostly Array.prototype method is used for polyfills but this keyword is used


// //Map polyfill
// let myArr = [1, 2, 3, 4, 5];

// let mappedArr = myArr.map(function(x){
//     return x * x;
// })  

// console.log(myArr);
// console.log(mappedArr);

// //Custom map polyfill

// function myPolyfillMap(arr, cb){
//     let newArr = [];

//     for(let i = 0; i < arr.length; i++){
//         newArr.push(cb(arr[i]));
//     }

//     return newArr;
// }

// function square(x){
//     return x * x;
// }

// console.log(myArr);
// console.log(myPolyfillMap(myArr, square));


// //Filter polyfill
// let filterArr = [2, 4, 6, 7, 9, 12, 13, 14, 15];

// let evenArr = filterArr.filter(function(x){
//     return x % 2 === 0;
// })

// console.log(filterArr);
// console.log(evenArr);

// //Custom filter polyfill

// function myPolyfillFilter(arr, cb){
//     let newArr = [];

//     for(let i = 0; i < arr.length; i++){
//         if(cb(arr[i])){
//             newArr.push(arr[i]);
//         }
//     }

//     return newArr;
// }

// function isEven(x){
//     return x % 2 === 0;
// }

// console.log(filterArr);
// console.log(myPolyfillFilter(filterArr, isEven));


//Reduce polyfill
let reduceArr = [1, 2, 3, 4, 5];

let sum = reduceArr.reduce(function(accumulator, x){
    return accumulator + x;
}
, 0)

console.log(reduceArr);
console.log(sum);

//Custom reduce polyfill

function myPolyfillReduce(arr, cb, accumulator){
    for(let i = 0; i < arr.length; i++){
        accumulator = cb(accumulator, arr[i]);
    }

    return accumulator;
}

function sumOfArr(accumulator, x){
    return accumulator + x;
}


console.log(reduceArr);
console.log(myPolyfillReduce(reduceArr, sumOfArr, 0));