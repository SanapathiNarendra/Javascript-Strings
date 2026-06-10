 function  onClickFixed(){
    debugger;
    var number = document.getElementById("numberInput").value;
    var digits = document.getElementById("digitsInput").value;
    var output = number.toFixed(digits);
    document.getElementById("result").innerHTML = output;
}       
function  onClickPrecision(){
    debugger;
    var number = document.getElementById("numberInput").value;
    var digits = document.getElementById("precisionInput").value;
    var result = number.toPrecision(digits);
    document.getElementById("precisionResult").innerHTML = result;

 }