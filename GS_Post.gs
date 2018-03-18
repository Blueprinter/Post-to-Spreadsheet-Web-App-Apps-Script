function makePost(data) {
try{
  var acct,dataBaseRecordID,options,payload,response,url;
  //ll('data',data)

  acct = theAcct();
  
  payload = {
    ssID:data.ssID,
    post:data.post,
    link:data.link,
    keywords:data.keywords,
    user:acct
  }
  
  options = {
    method:"post",
    "muteHttpExceptions":true,
    payload:payload
  }
  
  url = "https://script.google.com/macros/s/ID HERE/exec";
  
  response = UrlFetchApp.fetch(url,options).getContentText(); 
  //ll('response',response)
  
  return "Success!";
}catch(e) {
  //ll(e.message,e.stack)
  return "Error: " + e.message + "<br>" + e.stack;
}
}