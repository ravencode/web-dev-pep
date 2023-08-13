// puppeteer definition:

// puppeteer is a node library which provides a high-level API 
// to control Chrome or Chromium over the DevTools Protocol.

// Features
// Puppeteer has following classes
// o Puppeteer -> launch browser and get browser context
// o Browser Fetcher -> to use any version of chromium or any other browser
// o Browser Context -> this class represents browser tab
// o Page -> this class represents a single tab
// o Keyboard  -> this class represents keyboard
// o Mouse -> this class represents mouse
// o Touchscreen -> this class represents touchscreen
// o File chooser -> this class represents file chooser, like upload or download
// o Frame manager -> iframes are managed by this class
// o Worker -> parallel execution of scripts are managed by this class


const puppeteer = require('puppeteer');
let page;
console.log("Before");
const browserOpenPromise = puppeteer.launch({
    headless:false,
    slowMo:true,
    defaultViewport:null,
    args:["--start-maximized"]
}); //by default browser is headless which means it will not open the browser but will do the work in background
browserOpenPromise
    .then(function(browser){  
        
        const pageArrPromise = browser.pages();
        return pageArrPromise;
    }).then(function(browserPages){
        page = browserPages[0];
        let gotoPromise = page.goto("https://www.google.com/");
        return gotoPromise;
    // }).then(function(){
    //     let elementWaitPromise = page.waitForSelector("input[type='text']",{visible:true});
    //     return elementWaitPromise;
    }).then(function(){
        let keysWillSendPromise = page.keyboard.type("pepcoding");
        return keysWillSendPromise;
    }).then(function(){
        let enterPromise = page.keyboard.press("Enter");
        return enterPromise;
    }).then(function(){
        let elementWaitPromise = page.waitForSelector("h3.LC20lb.MBeuO.DKV0Md",{visible:true});
        return elementWaitPromise;
    }).then(function(){
        let clickPromise = page.click("h3.LC20lb.MBeuO.DKV0Md");
        return clickPromise;
    }).catch(function(err){
        console.log(err);
    })

console.log("After");
// .then(function(){
//     const waitForSelectorPromise = page.waitForSelector(".LC20lb.DKV0Md",{visible:true});
//     return waitForSelectorPromise;
// }).then(function(){
//     const clickPromise = page.click(".LC20lb.DKV0Md");
//     return clickPromise;
// }).then(function(){
//     console.log("Page opened");
// })

// pageArrPromise.then(function(browserPages){
//     Cpage = browserPages[0];
//     const gotoPromise = Cpage.goto("https://www.google.com/");
// }

