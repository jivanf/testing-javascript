var paraOneLeft = 0;
var paraTwoLeft = 0;
var switchDirection = false;


window.onload = function () {

    setInterval(moveParas, 0);
}


function moveParas() {


    if (switchDirection == false) {
        paraOneLeft++;
        paraTwoLeft++;

        if (paraOneLeft == screen.width) {
            switchDirection = true;
            document.getElementById("para1").style.left = 400;
        }
    }

    else {
        paraOneLeft--;
        paraTwoLeft--;

        if (paraOneLeft == -150) {
            switchDirection = false;

        }
    }

    document.getElementById("para1").style.left = paraOneLeft;
    document.getElementById("para2").style.left = paraTwoLeft;

}
