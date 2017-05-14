

window.onload = function () {
    var imgUSA = document.getElementById("imgUSA");
    var imgCanada = document.getElementById("imgCanada");
    var imgGermany = document.getElementById("imgGermany");

    imgGermany.onmouseover = function() {showText(this.id)};
    imgUSA.onmouseover = function() {showText(this.id)};
    imgCanada.onmouseover = function() {showText(this.id)};

    imgGermany.onmouseout = function() {hideText(this.id)};
    imgUSA.onmouseout = function() {hideText(this.id)};
    imgCanada.onmouseout = function() {hideText(this.id)};


}

function showText(id) {
    if (id == "imgGermany") {
        document.getElementById("textGermany").innerText = "Learn more about Germany";
    }

    else if (id == "imgCanada" ) {
        document.getElementById("textCanada").innerText = "Learn more about Canada";
    }

    else {
        document.getElementById("textUSA").innerText = "Learn more about the USA";
    }
}

function hideText(id) {
    if (id == "imgGermany" ) {
        document.getElementById("textGermany").innerText = "";
    }

    else if (id == "imgCanada") {
        document.getElementById("textCanada").innerText = "";
    }

    else {
        document.getElementById("textUSA").innerText = "";
    }
}









