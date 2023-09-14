// SetInterval polyfill
function createSetInterval() {
    
    let intervalId = 0;
    let intervalMap = {};

    function setIntervalPolyfill(callback, delay = 0, ...args) {
        var id = intervalId++;

        function repeat() {
            intervalMap[id] = setTimeout(() => {
                callback(...args);
                if (intervalMap[id]) {
                    repeat();
                }
            }, delay);
        }

        repeat();
        return id;
    }

    function clearIntervalPolyfill(intervalId) {
        clearTimeout(intervalMap[intervalId]);
        delete intervalMap[intervalId];
    }

    return {
        setIntervalPolyfill,
        clearIntervalPolyfill
    };
}

const { setIntervalPolyfill, clearIntervalPolyfill } = createSetInterval();

// Usage
let counter = 0;
let intervalId; // Declare intervalId
function greeting() {
    counter++;
    console.log("Hello World", counter);
    if (counter === 5) {
        clearIntervalPolyfill(intervalId);
    }
}

intervalId = setIntervalPolyfill(greeting, 1000);
