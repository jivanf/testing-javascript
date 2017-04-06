
function fahrenheitToCentigrade() {
var fahrenheit = document.getElementById("fahrenheit1").value;
var centigrade;

centigrade = 5/9 * (fahrenheit - 32);

var fixedCentigrade = centigrade.toFixed(2);

document.getElementById("centigrade1").value = fixedCentigrade;

}

document.getElementById("fahrenheit_to_centigrade").addEventListener("click", fahrenheitToCentigrade);

