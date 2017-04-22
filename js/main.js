var counterButton = null;
var counterHTML = null;
var counterInt = 0;
var counterID = null;
var date = null;

window.onload = function(){
    date = moment("2016-01-01T05:00:00-08:00");
    counterButton = document.getElementById("stopCounter");
    counterHTML = document.getElementById("counter");
    counterButton.addEventListener("click", startCounter);
    startCounter();
}

function startCounter() {

    if(counterID){
        clearInterval(counterID);
        counterID = null;
        counterButton.innerHTML = "Start Counter";
        return true;
    }

    counterID = setInterval(function(){
        counterInt++;
        date.subtract(1, 's');
        counterHTML.innerHTML = date.format('hh:mm:ss');
        console.log(date.toLocaleString());
    }, 1000);

    counterButton.innerHTML = "Stop Counter";

}
