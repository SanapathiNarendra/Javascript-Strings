document.getElementById("btnSubmit").addEventListener("click",function(){
debugger;
 var firstName=(document.getElementById("txtFirstName").value);
 var lastName=(document.getElementById("txtLastName").value);
 var email=(document.getElementById("txtEmail").value);
//alert(firstName);
//alert(lastName);
//alert(email);
//alert(firstName+' '+lastName+' '+ email);
 //alert("My firstname is " + firstName +','+ " My lastName is "+lastName +','+" My email is " + email+".")
   document.getElementById("pResult").innerHTML= "My firstname is " + firstName +','+ " My lastName is "+lastName +','+" My email is " + email+"."
    

});