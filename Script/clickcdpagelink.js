function clickcdpagelink()
{
  
let page = Aliases.browser.pageHighestRankingUnisForEnginee;
cdpagelink = page.FindChildByXPath("/html[1]/body[1]/div[3]/div[1]/div[1]/div[3]/div[3]/div[2]/div[2]/div[3]/div[2]/div[1]/div[1]/h2[1]/a[1]");

cdpagelink.click();

}


function fblogin()
{
     var page = Sys.Browser().Page("*");
     
     fbid = page.FindChildByXPath("//input[@id='email']");
     fbpwd = page.FindChildByXPath("//input[@id='pass']");
     
     fbid.SetText("I should like to have it explained");
    fbpwd.SetText("I should like to have it explained");

}