document.getElementById("btnCompare").addEventListener("click",function(){
    debugger;
    var inputValue1=document.getElementById("txtValue1").value;
    var inputValue2=document.getElementById("txtValue2").value;
    if ((inputValue1.toLowerCase()  == inputValue2.toLowerCase() )){
 document.getElementById("pResult").innerHTML="Both "
 console.log("True");
    }
 else{ 
 console.log("False");
 }
 
});