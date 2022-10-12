// filesystem module -> work with files and folders
//files --> create, read, write, delete, update
//create -> open -w, writeFileSync
//read -> readFileSync
//update -> writeFileSync
//delete -> unlinkSync 

let fs = require("fs");

// //read file
// let buffer = fs.readFileSync("NodeJS/1.1 abc.js"); 
// console.log("bin data", buffer); //buffer is a binary data
// console.log("text data", buffer+""); //convert binary data to text data 

// //create 
// fs.openSync("NodeJS/4.1 abc.txt", "w"); //create a file
// //write
// // writeFileSync --> no file then create and write, if file then overwrite
// fs.writeFileSync("NodeJS/4.1 abc.txt", "Hello World "); //write in a file

// //update
// fs.appendFileSync("NodeJS/4.1 abc.txt", "Hello Bro"); //write in a file

//create directory
//create -> mkdirSync
//read -> readdirSync
//delete -> rmdirSync

// fs.mkdirSync("NodeJS/my folder"); //create a directory

// fs.writeFileSync("NodeJS/my folder/my file.txt", "My world"); //write in a file

// // readDirSync --> read all files and folders in a directory
// let content = fs.readdirSync("NodeJS/my folder");
// console.log("content is", content);

// for(let i=0; i<content.length; i++){
//     console.log("file", content[i], "is removed");
//     //remove file
//     fs.unlinkSync("NodeJS/my folder/"+content[i]);
// }

// fs.rmdirSync("NodeJS/my folder"); //remove a directory

// //fs.existsSync --> check if file or folder exists --> return true or false
// let doesPathExist = fs.existsSync("NodeJS/4.1 abc.txt");
// console.log("doesPathExist", doesPathExist);
// //fs.lstatSync --> check if file or folder exists --> return object
// let detailsObj = fs.lstatSync(__dirname + "/4. fileSystem.js");
// let ans = detailsObj.isFile();
// console.log("ans", ans);
// ans = detailsObj.isDirectory();
// console.log("ans", ans);


//creating many folders
for(let i = 1; i <= 10; i++){
    let dirPathToMake = `Lecture-${i}`;
    fs.mkdirSync(dirPathToMake);
    fs.writeFileSync(dirPathToMake + "\\" + "readme.md", `# Hello World for ${dirPathToMake}`);
}