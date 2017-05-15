var html = document.documentElement;
var head = html.firstElementChild;
var body = head.nextElementSibling;

var header = document.createElement("H1");
var headerText = document.createTextNode("This is an H1");
var paragraph = document.createElement("P");
var paragraphText = document.createTextNode("This is a paragraph");

paragraph.appendChild(paragraphText);
header.appendChild(headerText);

body.appendChild(header);
body.appendChild(paragraph);

alert("The DOM Structure is: ")
alert(html.tagName);
alert(head.tagName);
alert(body.tagName);
alert(header.tagName);
alert(paragraph.tagName);






