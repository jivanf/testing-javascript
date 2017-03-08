var images = ["img/german.png", "img/mexico.png", "img/usa.png", "img/canada.png"];
var index = prompt("Enter a number between 0 and 3");
if(index == "" || index > 3) {
    alert("You didn't enter a number between 0 and 3.")
}
document.images["flag"].src = images[index];