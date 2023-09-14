const fs = require('fs');

console.log('before');

fs.readFile('f1.txt',cb);

//serially read the files

function cb(err,data){
    console.log('content '+data);
    fs.readFile('f2.txt',cb1);
    function cb1(err,data){
        console.log('content '+data);
        fs.readFile('f3.txt',cb2);
        function cb2(err,data){
            console.log('content '+data);
        }
        
    }
}

//this is flaw in js -> callback hell


console.log('after');
