let singleQuote = 'Hello World';
// let doubleQuote = "Hello World";
// let backTick = `Hello World`;
// console.log(singleQuote);
// console.log(doubleQuote);
// console.log(backTick);


// let char = singleQuote.charAt(6);
// let subStr = singleQuote.substring(2, 4);
// let char2 = singleQuote.charCodeAt(6); //ASCII value
// console.log(char);
// console.log(subStr);
// console.log(char2);

//join and split
let arrStr = singleQuote.split(" "); //space ke basis of array of string split
console.log(arrStr);
let str = arrStr.join("+"); //+ ke basis of array of string join
console.log(str);

//trim - start and end spaces remove
let str2 = " Hello World ";
console.log(str2);
console.log(str2.trim());
