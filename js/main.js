
var numberOfOptions = prompt("How many options do you want to create?");
var onlyLetters = /^[a-zA-Z\-_ ’'‘]*$/.test(numberOfOptions);
var list = document.getElementById("list");

function createOptions() {

    for (var i = 0; i <= numberOfOptions; i++) {

        if (numberOfOptions > 10000) {

            alert("Too many options!");
            window.location.reload();
            break;
        }

        if (numberOfOptions == 0) {
            alert("You can't create zero options");
            window.location.reload();
            break;
        }


        if (i == 0) {
            i = 1;
        }

        var option = document.createElement("option");
        option.text = "Option #" + i;
        list.add(option);

    }

    if (onlyLetters == true) {
        alert("You can't put letters here");
        window.location.reload();
    }

}

function createRemoveSelectedButton() {
    var div1 = document.getElementById("div1");
    var button = '<button id="remove_selected_but" onclick="removeSelectedOption();">Remove selected options</button>'
    div1.innerHTML = button;
    
}

function removeSelectedOption() {
    list.remove(list.selectedIndex);

}

function createRemoveButton() {

    var div2 = document.getElementById("div2");
    var button = '<button id="remove_but" onclick="removeOptions(list);">Remove options</button>'
    div2.innerHTML = button;

}

function removeOptions(selectbox) {
    var i;
    for (i = selectbox.options.length - 1; i >= 0; i--) {
        selectbox.remove(i);
    }
}

createRemoveButton();
createRemoveSelectedButton();
createOptions();

