const fs = require('fs');

console.log('before');

fs.readFile('f1.txt',cb);

function cb(err,data){
    if(err){
        console.log(err);
    }
    else{
        console.log(data+""); // data is in buffer form so we have to convert it into string
    }
}



console.log('after');

// output
// before
// after
// hello i am f1