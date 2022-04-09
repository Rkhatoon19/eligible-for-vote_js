function Check()
{
    var age= document.getElementById("exampleFormControlTextarea1").value;
    var nationality= document.getElementById("exampleFormControl").value;
    if(age>=18 && nationality=="indian")
    {
        window.alert("Eligible for vote.");
    }
    else{
        alert("No eligible for vote");
    }
}