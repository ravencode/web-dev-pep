let p1 = new Promise(function(resolve, reject) {
    reject("Promise 1 rejected");
  });
  
  let p2 = new Promise(function(resolve, reject) {
      resolve("Promise 2 rejected");
      }
  );
  
  let p3 = new Promise(function(resolve, reject) {
      resolve("Promise 3 resolved");
      }
  );
  
  
  Promise.race([p1, p2, p3]).then((val)=>{
      console.log(val);
  }).catch((err)=>{
      console.log(err);
  });
  
  
// promise.race will return the value of the first resolved promise
// if all promises are rejected then it will return the error of the first rejected promise
// if one promise is resolved and other is rejected then it will return the value of the resolved promise
  
