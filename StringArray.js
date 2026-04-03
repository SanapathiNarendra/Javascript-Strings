document.getElementById("btnStringArray").addEventListener("click",function() {
debugger;
var name=document.getElementById("txtStringArray").value;
document.getElementById("pResult").innerHTML=name[0];
document.getElementById("pLength").innerHTML=name.length;
document.getElementById("pLastletter").innerHTML=name[name.length-2];
document.getElementById("Result").innerHTML=name[0]+","+name[1]+","+name[2]+","+name[3]+","+name[4]+","+name[5]+","+name[6]+","+name[7]+","+name[8]+",";
});