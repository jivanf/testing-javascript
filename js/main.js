function displayHrefs() {
    var i;
    for(i = 0; i <= document.links.length; i++) { alert("Link number " + parseInt(i + 1) + " of this website is: "
    + document.links[i].href)}
}