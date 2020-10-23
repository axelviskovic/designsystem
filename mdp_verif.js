function CheckPassword(inputtxt) 
{ 
var passw= "andy";
if(inputtxt.value.match(passw)) 
{ 
alert('Correct, try another...')
return true;
}
else
{ 
alert('Wrong...!')
return false;
}
}