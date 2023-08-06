// // // prototype in js 
// Array.prototype.myFunc = function(){
//     console.log(this);
// }

// let arr = [1, 2, 3, 4, 5];
// arr.myFunc(); // this is possible because of prototype


//polyfill using prototype
//map

Array.prototype.myMap = function(cb){
    let newArr = [];
    for(let i = 0; i < this.length; i++){
        let ans = cb(this[i]);
        newArr.push(ans);
    }
    return newArr;
}

function double(x){
    return 2 * x;
}

let arr = [1, 2, 3, 4, 5];
let ans = arr.myMap(double);    
console.log(ans);
