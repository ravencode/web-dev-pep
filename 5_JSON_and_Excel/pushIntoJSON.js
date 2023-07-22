let fs = require("fs");
let buffer = fs.readFileSync('./ex.json');
console.log(buffer);
console.log('-------------------');

let data = JSON.parse(buffer.toString());

// console.log(data);
data.push({
    "name": "Thor",
        "last Name": "Rogers",
        "isAvenger": true,
        "friends": [
            "Bruce",
            "Neter",
            "Natasha"
        ],
        "age": 45,
        "address": {
            "city": "New York",
            "state": "manhatten"
        }
});
let stringData = JSON.stringify(data);
fs.writeFileSync('./ex.json', JSON.stringify(data));