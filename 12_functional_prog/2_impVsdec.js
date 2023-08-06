// imperative vs declarative

//problem -> is the sq of no. is even

// //imperative
// const x = 3;
// const xSquared = x * x;
// let isEven;

// if(xSquared % 2 === 0){
//     isEven = true;
// }else{
//     isEven = false;
// }

// console.log(isEven);


//declarative
const isSquareEven = (x) => ((x * x) % 2 === 0) ? true : false;
console.log(isSquareEven(5));


//imperative way is -? how to go about a problem, stepwise
//declarative way is -> what is the problem, short and simple code, no stepwise approach