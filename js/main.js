var timesVisited = parseInt(getCookieValue("timesVisited"));


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


if(getCookieName("username") != null) {
    document.getElementById("submit").remove();
    document.getElementById("textbox").remove();
}

else {

    document.getElementById("submit").addEventListener("click", function () {
    setCookie("username", document.getElementById("textbox").value);
    alert("Welcome " + "to my website" + ", " + getCookieValue("username"))
    document.getElementById("submit").remove();
    document.getElementById("textbox").remove();
})

}

if (!timesVisited) {

    timesVisited = 1;

}
else {

    timesVisited = timesVisited += 1;
    alert("Welcome back " + getCookieValue("username") + "!" + "  You have visited my website " +  timesVisited + " times");
}

setCookie("timesVisited", timesVisited);
