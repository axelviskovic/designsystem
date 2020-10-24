function CheckPassword() 
{ 
    var passw= "andy";
    var inputPsd = document.getElementById("password");
      
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

/*function CheckEmail() 
{ 
    var email= "andy@gmail.com";
    var inputEmail = document.getElementById("email");
    if(inputPsd.value.match(email)) 
    { 
        alert('Email correct')
        return true;
    }
else
    { 
    alert('Email incorrect')
    return false;
    }
}*/