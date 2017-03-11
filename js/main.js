function checkOS() {
    var os = navigator.userAgent;
    if(os.indexOf("Macintosh") != -1) {
        os = "Macintosh"
        location.href = "maconly.html"

    }

    else {
        os = "Windows"
        location.href = "windowsonly.html"
    }

    return os;
}

