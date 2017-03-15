var timesClicked = 0;
function clickButtonAndDisplayNumber() {
    timesClicked++;

    var number = document.getElementById("number").innerHTML = timesClicked;
}

function mouseUpOnButton() {
     document.getElementById("onMouse").innerHTML = "You just clicked the 'click a button to make a text appear' button";
}

