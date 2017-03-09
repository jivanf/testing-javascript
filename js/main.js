function changeImage(imgNumber) {
    var myImages = ["img/german.png", "img/mexico.png", "img/usa.png", "img/canada.png"];
    var newImage = Math.round(Math.random() * 3);
    var imgClicked = document.images[imgNumber];

    while(imgClicked.src.indexOf(myImages[newImage]) != -1) {
        newImage = Math.round(Math.random() * 3);
    }

    imgClicked.src = myImages[newImage];
}


