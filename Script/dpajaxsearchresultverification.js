
function main()
{

dpajaxsearchresults = Aliases.browser.pageBusinessManagementBscHonsAtU.sectionMypros.dpajaxsearchresultpod.contentText;
Log.Message(dpajaxsearchresults)

var str = KeywordTests.Verify_University_Prospectus_Functionality.Variables.universityname;


if(dpajaxsearchresults.includes(str))
{
  Log.Checkpoint("Pass, Provider displayed in ajax search")
}
else
{
  Log.Error("Fail,Provider not displayed in ajax search")
}

Aliases.browser.pageBusinessManagementBscHonsAtU.sectionMypros.dpajaxsearchresultpod.Click()
Aliases.browser.pageBusinessManagementBscHonsAtU.sectionMypros.ordernowlink.Click()







}