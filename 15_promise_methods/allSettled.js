let p1 = new Promise(function (resolve, reject) {
  resolve("Promise 1 resolved");
});

let p2 = new Promise(function (resolve, reject) {
  resolve("Promise 2 resolved");
});

let p3 = new Promise(function (resolve, reject) {
  resolve("Promise 3 resolved");
});

Promise.allSettled([p1, p2, p3])
  .then((arr) => {
    console.log(arr);
  })
  .catch((err) => {
    console.log(err);
  });

// promise.allSettled will return the array of objects containing the status of each promise
// if all promises are resolved then it will return the array of objects containing the status of each promise
// output:
// [
//     { status: 'fulfilled', value: 'Promise 1 resolved' },
//     { status: 'fulfilled', value: 'Promise 2 resolved' },
//     { status: 'fulfilled', value: 'Promise 3 resolved' }
//   ]
  
