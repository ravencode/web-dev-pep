let fs = require("fs");
let path = require("path");

// process.argv.slice(2) --> to get the input from the user
// slice(2) --> is use
let inputArray = process.argv.slice(2); //
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
    let destPath; //undefined
    if(dirPath == undefined){
        console.log("Kindly enter the path");
        return;
    } else {
        let doesExist = fs.existsSync(dirPath);
        if(doesExist){
            
            // 2. create -> organized_files -> directory
            destPath = path.join(dirPath, "organized_files");
            if(fs.existsSync(destPath) == false){
                fs.mkdirSync(destPath);
            }
            
        } else {
            console.log("Kindly enter the correct path");
            return;
        }
    
    organizeHelper(dirPath, destPath);
    // 4. copy / cut files to that organized directory inside of any of category folder
}}

function organizeHelper(src, dest){
    // 3. identify categories of all the files present in that input directory ->
    let childNames = fs.readdirSync(src);
    console.log(childNames);
    for(let i = 0; i < childNames.length; i++){
        let childAddress = path.join(src, childNames[i]);
        let isFile = fs.lstatSync(childAddress).isFile();
        if(isFile){
            let category = getCategory(childNames[i]);
            console.log(childNames[i], " belongs to --> ", category);
        }
    }
}
//Help function
function helpFn(dirPath){
    console.log(`
    List of all the commands:
        node main.js tree "directoryPath"
        node main.js organize "directoryPath"
        node main.js help
    `);
}
