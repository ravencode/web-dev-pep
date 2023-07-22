const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs"); 
const path = require("path");
const pdfkit = require("pdfkit");
function getIssuesPageHtml(url, topic, repoName){
    request(url,cb);
    function cb(err,response,html){
        if(err){
            console.log(err);
        }else if(response.statusCode == 404){
            console.log("Page Not Found");
        }else{
            // console.log(html);
            // getRepoLinks(html);
            getIssues(html);
        }
    }
    function getIssues(html){
        let $ = cheerio.load(html); 
        let issuesArr = $(".Link--primary.v-align-middle.no-underline.h4.js-navigation-open.markdown-title");
        let arr = [];
        // console.log(issuesArr.length);
        for(let i=0;i<issuesArr.length;i++){
            let link = $(issuesArr[i]).attr("href");
            let name = $(issuesArr[i]).text();
            let fullLink = "https://github.com"+link;
            // console.log(fullLink);
            arr.push(fullLink);
            // arr.push({
            //     "name":name,
            //     "link":fullLink
            // })
        }
        // console.log(topic," ",arr);
        let folderPath = path.join(__dirname,topic);
        dirCreater(folderPath);
        let filePath = path.join(folderPath,repoName+".pdf");
        let text = JSON.stringify(arr);
        let pdfDoc = new pdfkit();  
        pdfDoc.pipe(fs.createWriteStream(filePath));
        pdfDoc.text(text);
        pdfDoc.end();
        // fs.writeFileSync(filePath);
    }
}

    module.exports = getIssuesPageHtml;
    function dirCreater(folderPath){
        if(fs.existsSync(folderPath) == false){
            fs.mkdirSync(folderPath);
        }
    }
