function searchgmail() {
 

let page = Sys.Browser("chrome").Page("https://mail.google.com/mail/u/0/#inbox");

var tmp = Aliases.browser.pageBusinessManagementBscHonsAtU.tableP.cell2w.panel.panel.panel.gmailSubject
var minutes = Aliases.browser.pageBusinessManagementBscHonsAtU.panel3.panel.panel.table.cell.panel.panel.panel.panel.panel.panel.panel.panel.panel.panel.panel.table.cell.panel.minutes.textContent
var emailexpander = Aliases.browser.pageBusinessManagementBscHonsAtU.panel2.panelD.mailExpandLnk



//var email = page.NativeWebObject.Find("All you need to find the right uni","Welcome to Whatuni",1000);

if(tmp!= null)
{
tmp.Click();

if(minutes!= null)
{
  emailexpander.Click();
}
else{
  Log.Error("Email not recieved")
  
}

}
else
{
Log.Error("Email not recieved")
}


 
}