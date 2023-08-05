const puppeteer = require('puppeteer');
const codeObj = require("./codes");

const loginLink = "https://www.hackerrank.com/auth/login";
const email = "badecoy637@wiemei.com";
const password = "badecoy637";


//lets define iefe -> immediately invoked function expression
// means -> funtion define and call at the same time

(async function(){
    try{
        let browserInstance = puppeteer.launch({
            headless:false,
            defaultViewport:null,
            args:["--start-maximized"]
        });

        let newTab = await (await browserInstance).newPage();
        await newTab.goto(loginLink);
        await newTab.type("#input-1",email,{delay:10});
        await newTab.type("#input-2",password,{delay:10});
        await newTab.click(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled", {delay:10});
        await waitAndClick('.topic-card a[data-attr1="algorithms"]', newTab);
        await waitAndClick('input[value="warmup"]', newTab);
        await newTab.waitForSelector('body', {timeout: 3000});
        let allChallengesArr = await newTab.$$(".ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled");
        console.log(allChallengesArr.length);
        let qWillBeSolvedPromise = questionSolver(newTab, allChallengesArr[0], codeObj.answers[0]);
        return qWillBeSolvedPromise;

    } catch(err){
        console.log(err);
    }
})();



async function waitAndClick(selector, cPage){
    await cPage.waitForSelector(selector);
    let selectorClicked = cPage.click(selector);
    return selectorClicked;
}

async function questionSolver(page, question, answer){
    try {
        await question.click();
        await waitAndClick('.monaco-editor.no-user-select.vs', page);
        await waitAndClick('.checkbox-input', page);
        await page.waitForSelector('textarea.custominput', page);
        await page.type('textarea.custominput', answer, { delay: 10 });
        await page.keyboard.down('Control');
        await page.keyboard.press('A', { delay: 10 });
        await page.keyboard.press('X', { delay: 10 });
        await page.keyboard.up('Control');
        await waitAndClick('.monaco-editor.no-user-select.vs', page);
        await page.keyboard.down('Control');
        await page.keyboard.press('A', { delay: 10 });
        await page.keyboard.press('V', { delay: 10 });
        await page.keyboard.up('Control');
        await page.click('.hr-monaco-submit', { delay: 10 });
        // Resolve the Promise since the async function is successful
        return Promise.resolve();
    } catch (err) {
        console.log(err);
        // Reject the Promise in case of any error
        return Promise.reject(err);
    }
}




