function reverseString() {
    let string = document.getElementById("word").value;
    let stringReverse = " ";

    for (let i = string.length - 1; i >= 0; i--) {
        stringReverse = stringReverse + string[i];
    }
    
    document.getElementById("pResult").innerHTML = stringReverse.toUpperCase();
}