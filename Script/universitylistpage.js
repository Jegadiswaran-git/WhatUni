﻿function main()
{
  
var regex = /B/;
var str = Aliases.browser.firstproviderlink.contentText

var result = regex.test(str);


if(result==true)
{
 
  Log.Checkpoint("University Name Starts with B")
}
else
{
  Log.Error("University Name not starts with B")
}
}