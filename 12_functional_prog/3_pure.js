//impure and pure functions

//impure function -> function ko same arguments pass karne par bhi different output milta hai 
//it is dependent on some external factor
//functional programming rule is thar no external factor should affect the output of a function

let a = 7;

function addNum(b){
    console.log(a + b);
}

addNum(5);

//Pure function -> function ko call kare with same arguments, same output milega
function addNumPure(a, b){
    console.log(a + b); //side effect
}

addNumPure(5, 5);
//side effect -> like console.log, means jo function ko call karne par kuch aur bhi ho raha hai
//functional programming says that state should not mutate, state should be immutable
//means uss fucntion ke result ke alawa, aapke kisi external factor me change nahi hona chahiye
//jaise console.log me screen par kuch print ho raha hai, 

//to remove side effect, we can return the result instead of printing it
function addNumPure(a, b){
    return a + b; //no side effect
}

console.log(addNumPure(5, 5));


