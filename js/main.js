var theHistory = window.history.length;
document.write("Pages that are in the history stack: " + theHistory);
document.getElementById("history")

function goToHistoryUsingHref() {
    window.location.href = "history.html"
}

function goToHistoryUsingReplace() {
    window.location.replace("history.html")
}
