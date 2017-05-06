window.onload = function () {
    document.images[0].src = flags[parseInt(getCookieValue("flagNumber"))];

}

function setCookie(cookieName, cookieValue) {
    document.cookie = cookieName + "=" + cookieValue + "; expires=Thu, 18 Dec 2017 12:00:00 UTC";
}

function getCookieValue(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function getCookieName(name) {
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) {
            return null;
        }
    }
    else
    {
        begin += 2;
        var end = document.cookie.indexOf(";", begin);
        if (end == -1) {
            end = dc.length;
        }
    }
    return decodeURI(dc.substring(begin + prefix.length, end));
}

var flags = ["img/german.png", "img/mexico.png", "img/usa.png", "img/canada.png"];
var flagsNumber = parseInt(getCookieValue("flagNumber"));



if (!flagsNumber) {
    flagsNumber = 1;
}

else if (flagsNumber > 2) {
    flagsNumber = 0;
}

else {
    flagsNumber += 1;
}





setCookie("flagNumber", flagsNumber);

console.log(flags.length);
console.log(document.images[0].src);





