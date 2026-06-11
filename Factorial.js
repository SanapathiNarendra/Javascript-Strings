function calculateFactorial() {

    var number = Number(document.getElementById("txtNumber").value);

    var factorial = 1;

    for (var i = 1; i <= number; i++) {
        factorial = factorial * i;
    }

    document.getElementById("pResult").innerHTML =
        "Factorial = " + factorial;
}