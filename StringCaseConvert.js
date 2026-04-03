document.getElementById("btnUpperCase").addEventListener("click",function(){
    var name=document.getElementById("txtName").value;
    document.getElementById("pResult").innerHTML=name.toUpperCase();

});
document.getElementById("btnLowerCase").addEventListener("click",function(){
    var name=document.getElementById("txtName").value;
    document.getElementById("pResult").innerHTML=name.toLowerCase();
    
});