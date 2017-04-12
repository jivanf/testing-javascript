var pricesAndFruits = "Apple, 0.99. Banana, 1. Pear, 0.50";
var regExp = /[^a-z]+/i;
var splitString = pricesAndFruits.split(regExp);
document.write("The fruits are: <br>" + splitString.join("<br>"));
alert(pricesAndFruits);