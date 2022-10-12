let fs = require("fs");
let path = require("path");
// 
let inputArray = process.argv.slice(2);
// console.log(inputArray);

//node main.js tree "directoryPath"
//node main.js organize "directoryPath"
//node main.js help

let command = inputArray[0]; 
switch(command){
    case "tree":
        treeFn(inputArray[1]);
        break;
    case "organize":
        orgFn(inputArray[1]);
        break;
    case "help":
        helpFn(inputArray[1]);
        break;
    default:
        console.log("Please 🙏 input right command");
        break;
}

function treeFn(dirPath){
    console.log("tree command implemented for ", dirPath);
}


function orgFn(dirPath){
    // console.log("organize command implemented for ", dirPath);
    // 1. input -> directory path given
    if(dirPath == undefined){
        console.log("Kindly enter the path");
        return;
    } else {
        let doesExist = fs.existsSync(dirPath);
        if(doesExist){
            
            // 2. create -> organized_files -> directory
        } else {
            console.log("Kindly enter the correct path");
            return;
   
    // 3. identify categories of all the files present in that input directory ->
    // 4. copy / cut files to that organized directory inside of any of category folder
}}}


//Help function
function helpFn(dirPath){
    console.log(`
    List of all the commands:
        node main.js tree "directoryPath"
        node main.js organize "directoryPath"
        node main.js help
    `);
}
