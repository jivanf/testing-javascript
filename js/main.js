var body = document.getElementById("body");

var header = document.createElement("H1");
var headerText = document.createTextNode("This is an H1");
var paragraph = document.createElement("P");
var paragraphText = document.createTextNode("This is a paragraph");

paragraph.appendChild(paragraphText);
header.appendChild(headerText);

header.setAttribute("align", "center");
paragraph.setAttribute("id", "para");

alert("The ID of the paragraph is: " + paragraph.id);
alert("The attribute of the H1 is: " + header.getAttribute("align"));

body.appendChild(header);
body.appendChild(paragraph);








