function shifttabs1(pageurl)
{
  
var page = Sys.Browser().Page(pageurl);
page.Keys("^")
page.Keys("!")
page.Keys("[Tab]")

}


function enterkey()
{
  
var page = Sys.Browser().Page("*");
page.Keys("[Enter]")

}


function shifttabs()
{
  
var page = Sys.Browser().Page("*");
page.Keys("^")
page.Keys("!")
page.Keys("[Tab]")

}


function closetab()
{
  
  var page = Sys.Browser().Page("*");
  page.Close();
  
}

function scrollintoview()
{
  
var element = Aliases.browser.popularsubjectlink;

element.scrollIntoView();
}

function captureentirepage()
{
  var page = Sys.Browser("*").Page("*");
 // Captures an image of the web page
  var picture = page.PagePicture();
  // Posts the image to the test log
  Log.Picture(picture);
}


function scrollintoviewdppage()
{
  
var element1 = Aliases.browser.dpprovider1;

element1.scrollIntoView();
element1.Click();

var element2 = Aliases.browser.dpprovider2;

element2.scrollIntoView();
element2.Click();

}


function bootstrapVal(L2subject){
  
Project.Variables.L2subject=KeywordTests.Verify_Search_DataDriven.Variables.l2subject.Value('L2subject');

}

