function main()
{

Sys.Keys("^")
Sys.Keys("!")
Sys.Keys("[Del]")
Sys.Keys("[Enter]")


}

function closeBrowser()
{
  let browser = Sys.Browser("*");
  browser.Close();

}