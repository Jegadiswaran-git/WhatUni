function main()
{

 var str = KeywordTests.Verify_Content_Hub_Profile.Variables.UniversityName
 
 chprovidername = Aliases.browser.pageBusinessManagementBscHonsAtU.chprovidername.contentText;
 Log.Message(chprovidername)
 Log.Message(str)
 
 if(chprovidername.includes(str))
 {
      
 Log.Checkpoint("Pass, Expected Provider Name displayed in Content Hub Page")
 
 }
 else
 {
Log.Error("Fail, Expected Provider Name Not displayed in Content Hub Page")
 }






}