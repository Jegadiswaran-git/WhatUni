function EventControl1_OnLogWarning(Sender, LogParams)
{
  
      warningType1 = "The action may be performed incorrectly, because the control is not visible.";

      warningType2 = "Searching for a mapped object took too much time.";
      
      warningType3 = "Ambiguous recognition of the tested object."
      
      warningType4 = "The browser is already running."
      
      warningType5 = "Chrome is working in the background and cannot be closed."

 

     if (aqString["Find"](LogParams["MessageText"], warningType1) != -1  || aqString["Find"](LogParams["MessageText"], warningType2) != -1 || aqString["Find"](LogParams["MessageText"], warningType3) != -1 || aqString["Find"](LogParams["MessageText"], warningType4) != -1 || aqString["Find"](LogParams["MessageText"], warningType5) != -1)
           LogParams["Locked"] = true;
  	
           
           
}