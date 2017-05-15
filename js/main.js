document.documentElement.onclick = function () {
    alert("X coords using screenX: " + event.screenX + " " + "Y coords using screenY: " + event.screenY);
    alert("X coords using clientX: " + event.clientX + " " + "Y coords using clientY: " + event.clientY);
};


document.getElementById("para").onmousedown = function () {
    if (event.button == 0) {
        alert("You clicked with the left click");
    }

    else if (event.button == 1) {
        alert("You clicked with the middle click");
    }

    else {
        alert("You clicked with the right click");
    }
};

