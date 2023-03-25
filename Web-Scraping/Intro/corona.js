const cheerio  = require("cheerio");
const request = require("request");
const chalk = require("chalk");
// feature -> request
console.log("Before");
request('https://www.worldometers.info/coronavirus/', cb);

console.log("After");
function cb(error, response, html) {
    if(error){
        console.error('error:', error); // Print the error if one occurred
    }else{
        handleHtml(html);
    }
  }
function handleHtml(html){
    let selTool = cheerio.load(html);
    let ContentArray = selTool("#maincounter-wrap span");
    // // [i] -> wrap setTool
    // for(let i = 0; i < ContentArray.length; i++){
    //     let data = selTool(ContentArray[i]).text();
    //     console.log(data);
    // }
    let totalCases = selTool(ContentArray[0]).text();
    let totalDeaths = selTool(ContentArray[1]).text();
    let totalRecovered = selTool(ContentArray[2]).text();
    
    console.log(chalk.red("Total Cases: " + totalCases));
    console.log(chalk.green("Total Deaths: " + totalDeaths));
    console.log(chalk.blue("Total Recovered: " + totalRecovered));
}