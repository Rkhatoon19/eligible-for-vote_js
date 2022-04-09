function Check()
{
    var age= document.getElementById("exampleFormControlTextarea1").value;
    if(age>=18)
    {
        window.alert("Eligible for vote.");
    }
    else{
        alert("No eligible for vote");
    }
}