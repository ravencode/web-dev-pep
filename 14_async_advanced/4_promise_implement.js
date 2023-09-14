// creating your own promise
// promise has 3 states
const PENDING = 0;
const FULFILLED = 1;
const REJECTED = 2;

function customPromise(executor) {
    let state = PENDING;
    let value = null;   
    let handlers = [];
    let catchers = [];

    function resolve(result){
        if(state !== PENDING) {
            return;
        }
        state = FULFILLED;
        value = result;

        handlers.forEach((handler) => handler(value));
    }

    function reject(error){
        if(state !== PENDING) {
            return;
        }
        state = REJECTED;
        value = error;

        catchers.forEach((catcher) => catcher(value));
    }

    this.then = function (SuccessCallback) {
        if(state === FULFILLED) {
            SuccessCallback(value);
        } else {
            handlers.push(SuccessCallback);
        }
    }

    this.catch = function (failureCallback) {
        if(state === REJECTED) {
            failureCallback(value);
        } else {
            catchers.push(failureCallback);
        }
    }

    executor(resolve, reject);
}


const doWork = (res, rej) => {
    if(2 === 2) {
      setTimeout(() => { res('Promise Resolved Hello'); }, 2000);
    } else {
      setTimeout(() => { rej('Promise Rejected'); }, 2000);
    }
}


let greet = new customPromise(doWork);

greet.then((result) => {
    console.log("then: ", result);
}
);

greet.catch((error) => {
    console.log("catch: ", error);
}
);

