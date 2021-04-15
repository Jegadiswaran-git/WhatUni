function main()
{

chenqdialogfname = Aliases.browser.pageTheBestUkUniversityDegreeGui2.formOneqlform.chenqdialogfname.contentText
chenqdialoglname = Aliases.browser.pageTheBestUkUniversityDegreeGui2.formOneqlform.chenqdialoglname.contentText
chenqdialogaddress = Aliases.browser.pageTheBestUkUniversityDegreeGui2.formOneqlform.chenqdialogaddressline.contentText
chenqdialogcountryofresidence = Aliases.browser.pageTheBestUkUniversityDegreeGui2.formOneqlform.chenqdialogcountryofresidence.contentText

var fname = KeywordTests.Verify_Rich_Profile.Variables.FirstName
var lname = KeywordTests.Verify_Rich_Profile.Variables.LastName
var addressline = KeywordTests.Verify_Rich_Profile.Variables.Addressline1
var countryofresidence = KeywordTests.Verify_Rich_Profile.Variables.CountryofResidence

Log.Message(chenqdialogfname)
Log.Message(fname)



if(chenqdialogfname.includes(fname))
{
  Log.Checkpoint("Pass, First name available in Rich Profile Enquiry Dialog window")
}

else

{
  Log.Error("Fail, First name not available in Rich Profile Enquiry Dialog window")
}

Log.Message(chenqdialoglname)
Log.Message(lname)

if(chenqdialoglname.includes(lname))
{
  Log.Checkpoint("Pass, Last name available in Rich Profile Enquiry Dialog window")
}

else

{
  Log.Error("Fail, Last name not available in Rich Profile Enquiry Dialog window")
}

if(chenqdialogaddress.includes(addressline))
{
  Log.Checkpoint("Pass, Address line available in Rich Profile Enquiry Dialog window")
}

else

{
  Log.Error("Fail, Address line not available in Rich Profile Enquiry Dialog window")
}

if(chenqdialogcountryofresidence.includes(countryofresidence))
{
  Log.Checkpoint("Pass, Country of residence available in Rich Profile Enquiry Dialog window")
}

else

{
  Log.Error("Fail, Country of residence not available in Rich Profile Enquiry Dialog window")
}





}