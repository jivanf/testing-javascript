var txt = "A,B,C,D";
var but = document.getElementById("but");
var toggle = 0;
var newTxt = txt.split(",");
var p = document.getElementById("txt");

function reverseText() {
    newTxt.reverse();
    toggle = 1;
    p.innerHTML = newTxt;
}

if(toggle == 1) {

    function originalText() {
        newTxt.reverse();
        p.innerHTML = newTxt
    }
}

function callBothFunctions() {
    reverseText();
    originalText();
}

but.addEventListener("click", reverseText, originalText());




