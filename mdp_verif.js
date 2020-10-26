function CheckPassword()
{ 
    var passw= "andy";
    var inputPsd = andy /*document.getElementById("password")*/;
      
    if(inputPsd.value.match(passw)) 
    { 
        alert('Mot de passe correct')
        return true;
    }
else
    { 
    alert('Mot de passe incorrect')
    return false;
    }
}
