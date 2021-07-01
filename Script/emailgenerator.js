function makeEmail() {
var strValues="abcdefg12345";
var strEmail = "";
var strTmp;
for (var i=0;i<10;i++) {
strTmp = strValues.charAt(Math.round(strValues.length*Math.random()));
strEmail = strEmail + strTmp;
}
strTmp = "";
strEmail = strEmail + "@";
for (var j=0;j<1;j++) {
strTmp = strValues.charAt(Math.round(strValues.length*Math.random()));
strEmail = strEmail + "hctest";
}
strEmail = strEmail + ".com"

var regemail = strEmail

KeywordTests.Verify_Registration_Functionality.Variables.emailaddress = regemail
KeywordTests.Verify_Content_Hub_Profile.Variables.Emailaddress = regemail
KeywordTests.Verify_University_Prospectus_Functionality.Variables.emailaddress = regemail
KeywordTests.Verify_Subject_Profile.Variables.emailaddress = regemail


}