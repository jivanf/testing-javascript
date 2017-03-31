var finalOutput;
var subTotalPrice = 0;
var totalPrice;

function getProcessorSpeed() {

    if(document.getElementById('speed1').checked == true) {
        subTotalPrice += 25;
        return "Your chosen processor speed is: 1.5 GHZ"
    }

    else if(document.getElementById('speed2').checked == true) {
        subTotalPrice += 50;
        return "Your chosen processor speed is: 2.0 GHZ"
    }

    else if(document.getElementById('speed3').checked == true) {
        subTotalPrice += 75;
        return "Your chosen processor speed is: 2.5 GHZ"
    }

    else {
        return "You didn't choose a processor speed."
    }


}

function getCheckedBoxes(chkboxName) {

    var checkboxes = document.getElementsByName(chkboxName);

    var checkboxesChecked = [];

    // loop over them all
    for (var i = 0; i < checkboxes.length; i++) {

        // And stick the checked ones onto an array...
        if (checkboxes[i].checked) {
            checkboxesChecked.push(checkboxes[i]);
        }
    }

    //Convert the NodeList into an array
    var arr = Array.prototype.slice.call(checkboxesChecked, 0);
    // Return the array if it is non-empty, or null
    return arr;
}

// Call as


function showOrder() {

    var checkedBoxes = getCheckedBoxes("components");
    var comp = [];

    checkedBoxes.forEach(function(item){
        comp.push(item.value);
    });

    if(comp.length == 1) {
        subTotalPrice += 10
    }

    if(comp.length == 2) {
        subTotalPrice += 20
    }

    if(comp.length == 3) {
        subTotalPrice += 30
    }


    totalPrice = subTotalPrice;
    finalOutput = getProcessorSpeed() + "\n";
    finalOutput = finalOutput + "The additional components you want added to your computer are: " + "\n";
    finalOutput = finalOutput + comp.join("\n");
    document.getElementById("price").value = "Total: " +  "$" + subTotalPrice;
    subTotalPrice = 0;
    document.form1.reset();
    document.form2.reset();

}

