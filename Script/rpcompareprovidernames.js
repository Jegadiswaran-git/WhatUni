function main()
{

 var str = KeywordTests.Verify_Rich_Profile.Variables.UniversitySearchKeyword
 
 rpprovidername = Aliases.browser.pageTheBestUkUniversityDegreeGui2.section.spprovidername.contentText;
 
 Log.Message(rpprovidername)
 Log.Message(str)
 
 if(rpprovidername.includes(str))
 {
      
 Log.Checkpoint("Pass, Expected Provider Name displayed in Rich Profile Page")
 
 }
 else
 {
Log.Error("Fail, Expected Provider Name Not displayed in Rich Profile Page")
 }
 }