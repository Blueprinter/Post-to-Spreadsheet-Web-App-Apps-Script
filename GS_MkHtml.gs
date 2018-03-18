function getJS() {
  return HtmlService.createHtmlOutputFromFile("JS_Post").getContent();
  
}

function getCSS() {
  return HtmlService.createHtmlOutputFromFile("CSS_Post").getContent();
}

function theAcct() {
  var acct;
  
  acct = Session.getEffectiveUser().getEmail();
  
  acct = acct ? acct : "No Account retrieved";
  
  return acct;
}

function makeListOfSS(w) {
try{
  var dataBaseRecordID,h,i,L,options,payload,response,thisRow,url;

  payload = {
    getOptionList:true
  }
  
  options = {
    method:"post",
    payload:payload,
    "muteHttpExceptions":true
  }
  
  url = "https://script.google.com/macros/s/ID HERE/exec";
  
  response = UrlFetchApp.fetch(url,options).getContentText();
 
  response = JSON.parse(response);
  ll('response',response)
  
  h = "";
  L = response.length;
  
  if (!w) {
    for (i=0;i<L;i++) {
      thisRow = response[i];
      h = h + '<option value="' + thisRow[0] + '">' + thisRow[1] + '</options>';
    }
  } else {
    for (i=0;i<L;i++) {
      thisRow = response[i];
      //https://docs.google.com/spreadsheets/d/
      h = h + '<tr><td>' + thisRow[1] + '</td><td><a href="https://docs.google.com/spreadsheets/d/' + thisRow[0] + '">Link to Sheet</a></td></tr>';
    }
    
    h = "<table>" + h + "</table>";
  }
  
  return h;
}catch(e) {
  //ll(e.message,e.stack)
  return "Error: " + e.message + "<br>" + e.stack;
}
}