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

function timeTables(timesTable, startValue, endValue) {

    for(startValue <= endValue; startValue++;) {
        document.write(startValue * timesTable + "<br>");
    }

}

/* for(indexOfArray in timeTable) {
 document.write(timeTable[indexOfArray] + "\n");
 }
 */

timeTables(4, 4, 9);