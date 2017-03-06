var arr = [];
for(var i = 0; i < 10; i++){

    var result = prompt("Enter your name here");

    if(!result){
        alert("That's not valid");
        break;
    }

    arr.push(result);
    document.write(result + "<br>");
}