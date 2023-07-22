// hierarchy of excel file -> workbook -> worksheet -> column -> row -> cell
let xlsx = require("xlsx");
let data = require("./ex.json");

// wb -> filepath, ws -> name, json -> data

//new worksheet
let newWB = xlsx.utils.book_new();

//json data -> excel format convert
let newWS = xlsx.utils.json_to_sheet(data);

// newWB, ws, sheet name
xlsx.utils.book_append_sheet(newWB, newWS, "sheet1");

//file path
xlsx.writeFile(newWB, "abc.xlsx");