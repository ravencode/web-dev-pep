#!/usr/bin/env node
let fs = require("fs");
let path = require("path");

let inputArray = process.argv.slice(2);

//options
let optionsArr = [];
let filesArr = []; 

for(let i = 0; i < inputArray.length; i++){
    let firstChar = inputArray[i].charAt(0);
    if(firstChar == "-"){
        optionsArr.push(inputArray[i]);
    } else {
        filesArr.push(inputArray[i]);
    }
}

//options check
let bothPresent = optionsArr.includes("-b") && optionsArr.includes("-n");
if(bothPresent){
    console.log("You can't use -s and -n together");
    return;
}
//existence
for(let i = 0; i < filesArr.length; i++){
    let doesExist = fs.existsSync(filesArr[i]);
    if(doesExist == false){
        console.log(`File ${filesArr[i]} does not exist`);
        return;
    }
}


let content = "";
for(let i = 0; i < filesArr.length; i++){
    let bufferCOntent = fs.readFileSync(filesArr[i]);
    content += bufferCOntent + "\r\n";
}
// console.log(content);

let contentArr = content.split("\r\n");
// console.log(contentArr);

// -s   
let isSPresent = optionsArr.includes("-s");
if(isSPresent){
    for(let i = 1; i < contentArr.length; i++){
        if(contentArr[i] == "" && contentArr[i - 1] == ""){
            contentArr[i] = null;
        } else if(contentArr[i] == "" && contentArr[i - 1] == null){
            contentArr[i] = null;
        }
    }
    let tempArr = [];
    for(let i = 0; i < contentArr.length; i++){
        if(contentArr[i] != null){
            tempArr.push(contentArr[i]);
        }
    }
    contentArr = tempArr;
}
// console.log(contentArr.join("\n"));


// -n
let isNPresent = optionsArr.includes("-n");
if(isNPresent){
    for(let i = 0; i < contentArr.length; i++){
        contentArr[i] = `${i + 1} ${contentArr[i]}`;
    }
}
// console.log(contentArr.join("\n"));

// -b
let isBPresent = optionsArr.includes("-b");
if(isBPresent){
    let count = 1;
    for(let i = 0; i < contentArr.length; i++){
        if(contentArr[i] != ""){
            contentArr[i] = `${count} ${contentArr[i]}`;
            count++;
        }
    }
}
console.log(contentArr.join("\n"));



// let filepath = inputArray[0];




// if(filepath == undefined){
//     console.log("Please 🙏 enter the filepath");
//     return;
// } else {
//     const data = fs.readFileSync(filepath, 'utf8');
//     console.log(data);
// }