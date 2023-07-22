const request = require("request");
const cheerio = require("cheerio");
const getIssuesPageHtml = require("./issues");  
function getRepoPageHtml(url, topic){
    request(url,cb);
    function cb(err,response,html){
        if(err){
            console.log(err);
        }else if(response.statusCode == 404){
            console.log("Page Not Found");
        }else{
            // console.log(html);
            getRepoLinks(html);
        }
    }
    function getRepoLinks(html){
        //cheerio
        let $ = cheerio.load(html);
        let headingsArr = $(".f3.color-fg-muted.text-normal.lh-condensed");
        // console.log(topic)
        for(let i=0;i<8;i++){
            let twoAnchors = $(headingsArr[i]).find("a");
            let link = $(twoAnchors[1]).attr("href");
            let fullLink = "https://github.com"+link+"/issues";
            // console.log(fullLink);
            let repoName = link.split("/").pop();
            // console.log(repoName);
            getIssuesPageHtml(fullLink,topic,repoName);
        }
    }
}

module.exports = getRepoPageHtml;