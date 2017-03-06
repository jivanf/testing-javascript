function fix(fixNumber, decimalPlaces) {
    var div = Math.pow(10, decimalPlaces);
    fixNumber = Math.round(fixNumber * div) / div;
    return fixNumber.toFixed(3);
}

var number1 = prompt("Enter the number with decimal places you want to fix");
var number2 = prompt("How many decimal places do you want?");

document.write(number1 + " fixed to " + number2 + " decimal places is: ");
document.write(fix(number1, number2));