function validate()
{
    const Username=document.getElementById('username');
    const Password=document.getElementById('password');
    const email=document.getElementById('email');
    const phone=document.getElementById('phone');
    if(Username.value=="")
    {
        alert("user name is blank");
        Username.style.border="solid  red 3px";
       // const invalid=document.getElementById('invalid1').style.visibility="visible";
        return false;
    }
    else if(!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))
    {
        alert("emil is wrong")
        email.style.border="solid  red 3px";
        return false;
    }
    else if(!phone.value.match(/^\d{10}$/))
    {
        alert("wrong phone number")
        phone.style.border="solid  red 3px";
        return false;
    }
    else if(Password.value=="")
    {
        alert("Password is blank");
        Password.style.border="solid  red 3px";
        return false;
    }
    else
    {
        true
    }
}