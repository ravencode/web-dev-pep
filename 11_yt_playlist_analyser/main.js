const puppeteer = require('puppeteer');
let cTab;
let link = "https://www.youtube.com/playlist?list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt";
(async function () {
    try {
        let browserOpen = puppeteer.launch({
            headless: false,
            defaultViewport: null,
            args: ["--start-maximized"]
        });

        let browserInstance = await browserOpen;
        let allTabsArr = await browserInstance.pages();
        cTab = allTabsArr[0];
        await cTab.goto(link);
        await cTab.waitForSelector(".style-scope.yt-dynamic-sizing-formatted-string.yt-sans-28");
        let name = await cTab.evaluate(function(select){return document.querySelector(select).innerText;}, ".style-scope.yt-dynamic-sizing-formatted-string.yt-sans-28");
        console.log(name);

        let allData = await cTab.evaluate(getData, ".metadata-stats.style-scope.ytd-playlist-byline-renderer");
        console.log(name, allData.noOfVideos, allData.noOfViews);                        

    }
    catch (err) {
        console.log(err);
    }

})();


function getData(selector) {
   
}

  