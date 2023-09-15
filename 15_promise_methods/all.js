let p1 = new Promise(function(resolve, reject) {
  resolve("Promise 1 resolved");
});

let p2 = new Promise(function(resolve, reject) {
    reject("Promise 2 rejected");
    }
);

let p3 = new Promise(function(resolve, reject) {
    resolve("Promise 3 resolved");
    }
);

let promiseAll = Promise.all([p1, p2, p3]);
console.log(promiseAll);

promiseAll.then((PromiseArr)=>{
    console.log(PromiseArr);
}).catch((err)=>{
    console.log(err);
});

// when all promises are resolved then only it will return the array of resolved promises 
// else it will return the error of the first rejected promise




