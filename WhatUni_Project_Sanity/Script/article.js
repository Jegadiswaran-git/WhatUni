
function main()
{

var articlesearchresultheader = Aliases.browser.pageBusinessManagementBscHonsAtU.articlesearchresultheader.contentText
var str = KeywordTests.Verify_Article_Functionality.Variables.articlesearchkeyword
if(articlesearchresultheader.includes(str))
{
   Log.Checkpoint("Pass, Article header matches with expected search")
}
else
{
  Log.Error("Fail, Article header not matches with expected search")
}

}