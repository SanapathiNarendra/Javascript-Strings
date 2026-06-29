function checkPalindrome() {

    var number = Number(document.getElementById("txtNumber").value);

    var originalNumber = number;
    var reversedNumber = 0;

    while (number > 0) {
        var digit = number % 10;
        reversedNumber = reversedNumber * 10 + digit;
        
        number = Math.floor(number / 10);
    }


    if (originalNumber === reversedNumber) {
        document.getElementById("pResult").innerHTML =
            originalNumber + " is a Palindrome";
    }

    
    else {
        document.getElementById("pResult").innerHTML =
            originalNumber + " is Not a Palindrome";
    }
    
}