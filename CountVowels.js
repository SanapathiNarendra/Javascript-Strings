function countVowels() {
    var input = document.getElementById("word").value.toLowerCase;
    var count = 0;

    for (let i = 0; i <input.length; i++) {
        if (
            input[i] == 'a' ||

                input[i] == 'e' ||

                input[i] == 'i' ||

                input[i] == 'o' ||

                input[i] == 'u') {
            count++;
        }
    }
    
    document.getElementById("output").innerHTML = "Number of vowels: " + count;

}