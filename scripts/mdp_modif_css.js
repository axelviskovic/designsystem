function showWarningMDP()
{
  var passw= "andy";  
  var x = document.getElementById("warningMsgMDP");
  var inputPsd = document.getElementById("password");

  if(inputPsd.value.match(passw)) 
  { 
    x.style.visibility = "hidden";
    return true;
  }
    else {
      x.style.visibility = "visible";
      /*document.getElementsByTagName("input").style.borderColor = "red";*/
      return false;
    }

}

function showWarningMail()
{
  var mail= "andy@gmail.com";  
  var x = document.getElementById("warningMsgMail");
  var inputMail = document.getElementById("mail");

  if(inputMail.value.match(mail))
  { 
    x.style.visibility = "hidden";
    return true;
  }
    else {
      x.style.visibility = "visible";
    }
}