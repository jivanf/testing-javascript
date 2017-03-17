var form = document.form1;
function nameValidation() {
    if(form.name.value == "") {
        form.name.style.backgroundColor = "#FF0000"
    }

    else {
        form.name.style.backgroundColor = "#008000"
    }

}

function ageValidation() {
    if(form.age.value == "") {
        form.age.style.backgroundColor = "#FF0000"
    }

    else if(form.age.value > 100) {
        form.age.style.backgroundColor = "#FF0000"
    }

    else {
        form.age.style.backgroundColor = "#008000"
    }

}

function buttonValidation() {
    if (form.age.value > 100) {
        alert("Please put your real age in the text box");
    }

    else if(form.age.value == "") {
        alert("You need to put your age in the correct text box");
    }

    else if(form.name.value == "") {
        alert("You need to put your name in the correct text box");
    }

    else {
        alert("Thank you " + form.name.value + " for completing my form");
    }



}