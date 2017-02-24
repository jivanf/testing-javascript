
//Checks what method was returned
function methodChecking() {
    //Returns a decimal number
    var numberSelection  = prompt("Write a decimal number");

    //Returns a method from the Math object
    var methodSelection = prompt("Choose a method of the Math object");

    switch (methodSelection) {

        case "Math.round":
            var roundNumber = Math.round(numberSelection);
            document.write("The number " + numberSelection + " using the Math.round method returns: " +
                roundNumber + "<br>");
            break;

        case "Math.ceil":
            var ceilNumber = Math.ceil(numberSelection);
            document.write("The number " + numberSelection + " using the Math.ceil method returns: " +
                ceilNumber + "<br>");
            break;

        case "Math.floor":
            var floorNumber = Math.ceil(numberSelection);
            document.write("The number " + numberSelection + " using the Math.floor method returns: " +
                floorNumber + "<br>");
            break;

        case "Math.sqrt":
            var sqrtNumber = Math.sqrt(numberSelection);
            document.write("The number " + numberSelection + " using the Math.sqrt method returns: " +
                sqrtNumber + "<br>");
            break;
            return;


    }


}

methodChecking();



