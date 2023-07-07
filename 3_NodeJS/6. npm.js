// chalk is a package to color the console output
let chalk = require("chalk");
// figlet is a package to convert text to ASCII art
let figlet = require("figlet");

// console.log(chalk.blue("Hello World!"));
// console.log(chalk.bold("Hello World!"));
// console.log(chalk.underline("Hello World!"));
// console.log(chalk.bgBlueBright("Hello World!"));

// textSync --> convert text to ASCII art
console.log(chalk.red(figlet.textSync("Hello World!")));