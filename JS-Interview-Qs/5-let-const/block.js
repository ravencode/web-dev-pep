// // if(true){
// //     console.log("HELLO");
// //     console.log("hi");
// // }
// // {} -> BLOCK

// //Hamesha memory allocate block ke hisab se hi hoti hai

// let fruits = "apple";
// console.log(fruits);
// {
//     // console.log(fruits); -> TDZ
//     let fruits;
//     console.log(fruits);
//     fruits = "orange";{
//         console.log(fruits); //will check in the nearest block
//     }
    
// }
// console.log(fruits);

// //jab bhi ek block encounter hota hai, to let ke liye memory allocate hoti hai

// //Variable Shadowing -> when a variable is declared in a block, it shadows the variable of the same name in the outer scope
// //legal: same type
// let fruits = "apple";
// console.log(fruits);
// {
//     // console.log(fruits); -> TDZ
//     let fruits = "orange"; //andar wale variable ne bahar wale variable ko shadow kar diya
//     console.log(fruits);
// }
// console.log(fruits);

// //variable shadowing is works in the same way for var and const
// //illegal: different type, kabhi bhi koi banda apne block se bahar jaata hai to shadowing illegal hojati hai
// let fruits = "apple"; //let ka scope andar tak rahega
// console.log(fruits);
// {
//     // console.log(fruits); -> TDZ
//     var fruits = "orange"; //var ka scope block scope nhi hota
//     console.log(fruits);
// }
// console.log(fruits);

// Jab bhi block banega, uske andr let pada hua hai, tmemory allocate hogi
// Car ke case me jab bhi function call hoga, ya global areame ho to var ke liye memeory allocate hogi
// Illegal shadowing -> andar bahar var let nhi ho sakta same name se