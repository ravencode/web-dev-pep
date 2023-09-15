let p1 = Promise.resolve("Promise resolved").then((val)=>{
    console.log(val);
});

let p2 = Promise.reject("Promise rejected").catch((val)=>{
    console.log(val);
});
