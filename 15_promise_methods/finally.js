function test(){
    var a = 1 + 2;
    return new Promise((resolve, reject) => {
       if(a === 2){
           resolve("Promise resolved");
         }else{
              reject("Promise rejected");
            }
    });
} 


test().then((val)=>{
    console.log(val);
}
).catch((err)=>{
    console.log(err);
}
).finally(()=>{
    console.log("Experiment completed");
}
);


// finally will be executed in both the cases whether the promise is resolved or rejected
// output:
// Promise rejected
// Experiment completed
// finally is used for example you are making a application and you want to show the loading screen until the promise is resolved or rejected
// then you can use the finally method to hide the loading screen
