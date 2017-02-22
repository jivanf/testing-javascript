//USING SUBSTR METHOD
var myString = "Hello world how are you?";
var indexOfMyString = myString.indexOf("how");
document.write(indexOfMyString + "<br>");

indexOfMyString = myString.lastIndexOf("how");
document.write(indexOfMyString + "<br>");

indexOfMyString = myString.substr(0, 5);
document.write(indexOfMyString + "<br>");

//USING INDEXOF METHOD
var longString = "JavaScript is cool. ";
longString = longString + "I like JavaScript. ";
longString = longString + "I always use JavaScript";
var javaScriptCount = 0;
var foundAtPosition = 0;

while(foundAtPosition != -1) {
    foundAtPosition = longString.indexOf("JavaScript", foundAtPosition);

    if(foundAtPosition != -1) {
        foundAtPosition++;
        javaScriptCount++;
    }
}


document.write(longString + "<br>");
document.write("<H3>Total occurrences of the word JavaScript: </H3>" + javaScriptCount + "<br>");


