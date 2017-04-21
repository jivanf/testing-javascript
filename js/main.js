
date = new Date();
cities = null;
minutesDiff = null;


window.onload = function(){
    date = new Date();
    cities = document.getElementById("cities");

}


function getSelectedValue(){

    return cities.options[cities.selectedIndex].value;

}

function checkSelection() {
    if(cities.selectedIndex == -1) {
        alert("Choose a city");
        return false;
    }

    return true;
}


function printLocalTime() {

    if (!checkSelection()) return false;

    var localMinutes = date.getMinutes();
    var localHours = date.getHours();
    var localSeconds = date.getSeconds();

    if(localMinutes < 10) {
        localMinutes = "0" + localMinutes;
    }

    if(localHours < 10) {
        localHours = "0" + localHours;
    }

    if(localSeconds < 10) {
        localSeconds = "0" + localSeconds;
    }

    alert(localHours + ":" + localMinutes + ":" + localSeconds);

}

function printCityTime() {

    if (!checkSelection()) return false;


    var cityDate = new Date();

    var minDiff = getSelectedValue();

    var cityMinutes = date.getMinutes();
    var cityHours = date.getHours();
    var citySeconds = date.getSeconds();

    if(cityMinutes < 10) {
        cityMinutes = "0" + cityMinutes;
    }

    if(cityHours < 10) {
        cityHours = "0" + cityHours;
    }

    if(citySeconds < 10) {
        citySeconds = "0" + citySeconds;
    }

    cityDate.setMinutes(minDiff);

    alert(cityDate.getHours() + ":" +cityDate.getMinutes() + ":" + cityDate.getSeconds());


}


function checkTime() {

    if (!checkSelection()) return false;

    var UTCMinutes = date.getMinutes();
    var localHours = date.getHours();
    var localSeconds = date.getSeconds();
    var cityDate = new Date(date);

    cityDate.setMinutes(date.getMinutes() + minutesDiff);

    alert(new Date());
    alert(cityDate);

}

document.getElementById("checkTime").addEventListener("click", checkTime);

document.getElementById("printLocalTime").onclick = printLocalTime;

document.getElementById("printCityTime").onclick = printCityTime;   

