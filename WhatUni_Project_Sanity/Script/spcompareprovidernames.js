function main()
{

 var str = KeywordTests.Verify_Subject_Profile.Variables.UniversityName
 
 spprovidername = Aliases.browser.pageBusinessManagementBscHonsAtU.spprofileprovidername.contentText;
 Log.Message(spprovidername)
 Log.Message(str)
 
 if(spprovidername.includes(str))
 {
      
 Log.Checkpoint("Pass, Expected Provider Name displayed in Subject Profile Page")
 
 }
 else
 {
  Log.Error("Fail, Expected Provider Name Not displayed in Subject Profile Page")
 }

 }