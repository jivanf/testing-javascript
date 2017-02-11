/* var timeTable = new Array();
 timeTable[0] = 12;
 timeTable[1] = 12 * 2;
 timeTable[2] = 12 * 3;
 timeTable[3] = 12 * 4;
 timeTable[4] = 12 * 5;
 timeTable[5] = 12 * 6;
 timeTable[6] = 12 * 7;
 timeTable[7] = 12 * 8;
 timeTable[8] = 12 * 9;
 timeTable[9] = 12 * 10;
 timeTable[10] = 12 * 11;
 timeTable[11] = 12 * 12;


 var indexOfArray;
 */

function timeTables() {

    var timesTable = prompt("What time table do you want to see?");
    var startValue = prompt("From what number should I start?");
    var endValue = prompt("Until what number should I stop?");

    if(startValue > endValue) {
        alert("The starting number has to be less than the ending number!");
    }

    for(; startValue <= endValue; startValue++) {

        if(isNaN(timesTable)) {
            alert("The time table needs to be a number...")
            break;
        }

        if(isNaN(startValue)) {
            alert("The starting value needs to be a number...")
            break;
        }

        if(isNaN(endValue)) {
            alert("The final value needs to be a number...")
            break;
        }

        document.write(timesTable + " * " + startValue + " = " + startValue * timesTable + "<br>");
    }

}

/* for(indexOfArray in timeTable) {
 document.write(timeTable[indexOfArray] + "\n");
 }
 */

timeTables();