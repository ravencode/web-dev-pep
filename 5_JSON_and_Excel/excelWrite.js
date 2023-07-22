// Read excel file
let xlsx = require("xlsx");

//workbook get
let wb = xlsx.readFile("abc.xlsx");
//sheet get
let excelData = wb.Sheets["sheet1"];
//sheet data get
let ans = xlsx.utils.sheet_to_json(excelData);

console.log(ans);