 
 function onclickFixed() {
    debugger;
    var number = Number(document.getElementById("numberInput").value);
    var digits = Number(document.getElementById("fixedInput").value);

    var fixedValue = number.toFixed(digits);
    document.getElementById("pResult").innerHTML = fixedValue;
}

function onClickPrecision() {
    debugger;
    var number = Number(document.getElementById("numberInput").value);
    var digits = Number(document.getElementById("fixedInput").value);

    var result = number.toPrecision(digits);
    document.getElementById("pResult").innerHTML = result;
}