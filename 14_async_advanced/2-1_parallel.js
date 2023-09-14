const fs = require('fs');

console.log('before');

fs.readFile('f1.txt',cb);
fs.readFile('f2.txt',cb1);
fs.readFile('f3.txt',cb2);

function cb(err,data){
    console.log('content '+data);
}
function cb1(err,data){
    console.log('content '+data);
}
function cb2(err,data){
    console.log('content '+data);
}


console.log('after');
