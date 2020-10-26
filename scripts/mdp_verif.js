function CheckPassword()
{ 
    var passw= "andy";
    var inputPsd = document.getElementById("password");
    var x = document.getElementById("warningMsgMDP");
      
    if(inputPsd.value.match(passw)) 
    { 
        return true;
    }
else
    { 
        x.style.display = "inline";
        return false;
    }
}