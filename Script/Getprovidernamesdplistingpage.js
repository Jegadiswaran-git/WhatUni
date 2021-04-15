function main()
{
  
Providername1 = Aliases.browser.pageBusinessManagementBscHonsAtU.sectionMypros.section.dpprovider1.contentText
Providername2 = Aliases.browser.pageBusinessManagementBscHonsAtU.sectionMypros.section.article.textnode15.contentText

var prov1 =  Aliases.browser.pageBusinessManagementBscHonsAtU.sectionMypros.section.dpprovider1;
var prov2 =  Aliases.browser.pageBusinessManagementBscHonsAtU.sectionMypros.section.article.textnode15; 
prov1.scrollIntoView();   
prov1.Click();
Delay(2000)
prov2.scrollIntoView();   
prov2.Click();

Log.Message(Providername1)
Log.Message(Providername2)




}