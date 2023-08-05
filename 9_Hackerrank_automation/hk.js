const puppeteer = require('puppeteer');
const codeObj = require("./codes");

const loginLink = "https://www.hackerrank.com/auth/login";
const email = "badecoy637@wiemei.com";
const password = "badecoy637";


let browserOpen = puppeteer.launch({
    headless:false,
    defaultViewport:null,
    args:["--start-maximized"]
});

let page;

browserOpen.then(function(browserObj){
    let browserOpenPromise = browserObj.newPage();
    return browserOpenPromise;  
}).then(function(newTab){
    page = newTab;
    let hackerrankOpenPromise = newTab.goto(loginLink);
    return hackerrankOpenPromise;
}).then(function(){
    let emailisEnteredPromise = page.type("#input-1",email,{delay:10});
    return emailisEnteredPromise;
}).then(function(){
    let passwordisEnteredPromise = page.type("#input-2",password,{delay:10});
    return passwordisEnteredPromise;
}).then(function(){
    let loginPromise = page.click(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled");
    return loginPromise;
}).then(function(){
    let clickOnAlgoPromise = waitAndClick('.topic-card a[data-attr1="algorithms"]',page);
    return clickOnAlgoPromise;
}).then(function(){
    let waitforWarmupPromise = waitAndClick('input[value="warmup"]',page);
    return waitforWarmupPromise;
}).then(function(){
    let waitFor3SecondsPromise = page.waitForSelector('body', {timeout: 3000});
    return waitFor3SecondsPromise;
}).then(function(){
    let allChallengesPromise = page.$$(".ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled",{delay:10});
    return allChallengesPromise;
}).then(function(questionsArr){
    console.log(questionsArr.length);
    let qWillBeSolvedPromise = questionSolver(page, questionsArr[0], codeObj.answers[0]);
    return qWillBeSolvedPromise;
}).then(function(){
    console.log("Question is solved");
}).catch(function(err){
    console.log(err);
})


function waitAndClick(selector, cPage){
    return new Promise(function(resolve,reject){
        let waitForModalPromise = cPage.waitForSelector(selector,{visible:true});
        waitForModalPromise.then(function(){
            let clickModal = cPage.click(selector,{delay:10});
            return clickModal;
        }).then(function(){
            resolve();
        }).catch(function(err){
            reject(err);
        })
    })
}


function questionSolver(page,  question, answer){
    return new Promise(function(resolve,reject){
        let questionWillBeCLickedPromise = question.click();
        questionWillBeCLickedPromise.then(function(){
          let editorInFocusPromise = waitAndClick('.monaco-editor.no-user-select.vs',page); 
          return editorInFocusPromise;  
        }).then(function(){
            let checkboxWillBeCLickedPromise = waitAndClick('.checkbox-input',page);
            return checkboxWillBeCLickedPromise;
        }).then(function(){
            return page.waitForSelector('textarea.custominput', page);
        }).then(function(){
            return page.type('textarea.custominput', answer, {delay:10});
        }).then(function(){
            let ctrlIsPressedP = page.keyboard.down('Control');
            return ctrlIsPressedP;
        }).then(function(){
            let aIsPressedP = page.keyboard.press('A', {delay:10});
            return aIsPressedP;
        }).then(function(){
            let xIsPressedP = page.keyboard.press('X', {delay:10});
            return xIsPressedP;
        }).then(function(){
            let ctrlIsUnPressedP = page.keyboard.up('Control');
            return ctrlIsUnPressedP;
        }).then(function(){
            let mainEditorInFocusP = waitAndClick('.monaco-editor.no-user-select.vs',page);
            return mainEditorInFocusP;
        }).then(function(){
            let ctrlIsPressedP = page.keyboard.down('Control');
            return ctrlIsPressedP;
        }).then(function(){
            let aIsPressedP = page.keyboard.press('A', {delay:10});
            return aIsPressedP;
        }).then(function(){
            let vIsPressedP = page.keyboard.press('V', {delay:10});
            return vIsPressedP;
        }).then(function(){
            let ctrlIsUnPressedP = page.keyboard.up('Control');
            return ctrlIsUnPressedP;
        }).then(function(){
            let submitIsClickedP = page.click('.hr-monaco-submit', {delay:10});
            return submitIsClickedP;
        }).then(function(){
            resolve();
        }
        ).catch(function(err){
            console.log(err);
            reject(err);
        })
    })
}

