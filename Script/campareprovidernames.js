﻿function main()
{

opendaypodtwoprovidername = Aliases.browser.pageBusinessManagementBscHonsAtU.providernamesopendaypod2.contentText;

var str = Project.Variables.opendaypodtwoprovidernames

if(opendaypodtwoprovidername.includes(str)) 
{
 Log.Checkpoint("Pass, Provider names are same")
  
}
else{
  
  Log.Error("Fail, Provider names are not same"+opendaypodtwoprovidername)
  
}






}