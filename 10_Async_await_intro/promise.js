//coffee shop exmaple

function placeOrder(drink){
    return new Promise((resolve, reject) => {
        if(drink == "coffee"){
            resolve("Order placed");
        }else{
            reject("Sorry, we only serve coffee");
        }
    })
}

function processOrder(order){
   return new Promise((resolve) => {
         console.log("order is being processed");
         resolve(`coffee served for the ${order}`);         
   })
}

// //Scenario with promises
placeOrder("tea").then(function(orderFromCustomer){
    console.log("request received");
    let orderIsProcessedP = processOrder(orderFromCustomer);
    return orderIsProcessedP;
}).then(function(orderIsProcessedP){
    console.log(orderIsProcessedP);
}).catch(function(err){
    console.log(err);
})


// async await is clean version of promises
// how does this work? 
    // when async await is applied, the request is blocked, i.e neeche ka jo bhi
    // code hog vo chal jayega, and then the request will be processed
    // basically, vo khud block hokr rahega jabtk uski reqeust fulfilled nhi hoti

//Scenario with async await

async function serveOrder(){
    
    try{
        const orderRecieved = await placeOrder("coffee");
        console.log(orderRecieved);
        const processedOrder = await processOrder(orderRecieved);
        console.log(processedOrder);
    }
    catch(err){
        console.log(err);
    }
}

serveOrder();