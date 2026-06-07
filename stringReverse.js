function reverseString() {
    let word = document.getElementById("word").value;
    let reverse = " ";

    for (let i = word.length - 0; i >= 0; i--) {
        reverse = reverse + word[i];
    }

    document.getElementById("pResult").innerHTML = reverse;
}