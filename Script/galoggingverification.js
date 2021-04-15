function main()
{
  
   var page = Sys.Browser().Page("*");
   
   
   var str = "ga('newTracker.set', 'dimension1', 'homepage');";
   aqObject.CheckProperty(page, "script", cmpContains, str, false);

}

