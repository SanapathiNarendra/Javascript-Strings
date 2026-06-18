function generateFibonacci() {
    var terms = Number(document.getElementById("txtNumber").value);
    var first = 0;  
    var second = 1;
    var series = "";
    for (var i = 1; i <= terms; i++) {
        series += first + " ";

        var next = first + second;
        first = second;
        second = next;
        
    }

    document.getElementById("pResult").innerHTML =
        "Fibonacci Series: " + series;
}