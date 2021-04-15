function main()
{
  


var str = Aliases.browser.firstproviderlink.contentText
var matches = str.match(/\b(\w)/g);
var acronym = matches.join('');
Log.Message(acronym)

if(acronym.includes("B"))
{
  Log.Checkpoint("University Name Starts with B")
}
else
{
  Log.Error("University Name Not Starts with B")
}
          






}