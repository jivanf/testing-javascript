//array that will contain the alphabet
var alphabet = new String("0abcdefghijklmnopqrstuvwxyz").split("");

//array that will contain the plain text or the cipher text
var finalResult = [];

function encryptWord() {
    var plainText = prompt("Type the word you want to encrypt").split("");
    var key = prompt("Type the key that will be used to get the cipher text").split("");
    for(var i = 0; i < plainText.length  &&  i <= key.length; i++) {
        var numberResult = (alphabet.indexOf(plainText[i]) + alphabet.indexOf(key[i]));

        if (numberResult > alphabet.length) {
            numberResult = numberResult - alphabet.length;

        }

        finalResult.push(alphabet[numberResult]);
    }

    //puts the cipher text together
    document.write(finalResult.join(""));

}

function decryptWord() {
    var plainText = prompt("Type the cipher text that will be used to get the plain text").split("");
    var key = prompt("Type the key that will be used to get the plain text").split("");
    for(var i = 0; i < plainText.length  &&  i <= key.length; i++) {
        var numberResult = (alphabet.indexOf(plainText[i]) - alphabet.indexOf(key[i]));

        if (numberResult < 0) {
            numberResult += 27;
        }

        finalResult.push(alphabet[numberResult]);

    }

    //makes the plain text one word
    document.write(finalResult.join(""));


}

document.getElementById("encryptButton").addEventListener("click", function () {
    encryptWord();
});

document.getElementById("decryptButton").addEventListener("click", function () {
    decryptWord();
});


