var myImages = ["img/usa.png", "img/mexico.png", "img/canada.png", "img/german.png"];
var newImage = Math.round(Math.random() * 3);

function onImage(imgNumber) {
    var imgClicked = document.images[imgNumber];
    while(imgClicked.src.indexOf(myImages[newImage]) != -1) {
        newImage = Math.round(Math.random() * 3);
    }

    imgClicked.src = myImages[newImage]
}

function outImage(imgNumber) {
    document.images[imgNumber].src = myImages[imgNumber];
}