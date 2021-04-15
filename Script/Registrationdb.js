function TestProc(email)
 {
  var AConnection, RecSet, Cmd, Prm;
   // Create a new Connection object
  AConnection = ADO.CreateConnection();
  // Specify the connection string
  AConnection.ConnectionString = "Provider=MSDASQL.1;Password=l10nk1ng;Persist Security Info=True;User ID=hot_admin;Data Source=DOMTEST";
  // Activate the connection
  AConnection.Open();
  // Create a new Command object
  Cmd = ADO.CreateCommand();
  // Specify the connection
  Cmd.ActiveConnection = AConnection;
  // Specify command type and text
  Cmd.CommandType = adCmdText;
  Cmd.CommandText = "select COUNT(*) from u_users where email='"+email+"'";
  
   // Execute the command
  RecSet = Cmd.Execute();
  // Process the results
  if(RecSet.Fields.Item(0).Value>0)
  {
    Log.Checkpoint("Pass, User available in DB")
  }
  else{
    Log.Error("Fail, User not available in DB")
  }

  AConnection.Close();
 }