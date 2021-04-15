
function main()

{
  

  var str = KeywordTests.Verify_Content_Hub_Profile.Variables.Universitysearchkeyword;
  
  

 UniversityName =  Aliases.browser.panel.contentText;
  
  if(UniversityName.includes(str))
  {
    Log.Checkpoint("Pass, Provider displayed in ajax search")
  }
  else
  {
    Log.Error("Fail, Provider Not displayed in ajax search")
  }

}

