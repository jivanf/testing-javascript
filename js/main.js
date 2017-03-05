
function startTime() {

    var daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var months= ["January", "February", "March", "April", "May", "June", "July", "October", "September", "November", "December"];

    var today = new Date();
    var suffix = today.getDate();
    var y = today.getFullYear();
    var mh = today.getMonth();
    var dt = today.getDate();
    var d = today.getDay();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    switch(suffix) {
        case 1:
        case 21:
        case 31:
            suffix = "st";
            break;

        case 2:
        case 22:
            suffix = "nd";
            break;

        case 3:
        case 23:
            suffix = "rd";
            break;

        default:
            suffix = "th";
            break;


    }


    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("txt").innerHTML = "<span id='all'>" + "Today is: " + "<span class='time'>" + daysOfTheWeek[d] + ", " + months[mh] + " " + dt + suffix + ", "
        + y + "</span>"
        + " and you are looking at this message exactly at "
        +  "<span class='time'>" + h + ":" + m + ":" + s + "</span>" + "</span>";
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i}  // add zero in front of numbers < 10
    return i;
}

startTime();
