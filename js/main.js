//Array of fruits
var fruits = ["Banana", "Apple", "Mango", "Pear"];
var joinFruits = fruits.join(", ");

var moreFruits = ["Orange", "Watermelon", "Papaya", "Pineapple"];
var joinMoreFruits = moreFruits.join(", ");

var fruitsArray = document.getElementById("fruit").innerHTML = joinFruits;
var moreFruitsArray = document.getElementById("moreFruits").innerHTML = joinMoreFruits;

function sortingArrays() {

    var fruits = ["Banana", "Apple", "Mango", "Pear"];

    //Gets the ID of the <p> tag where the array will be displayed
    var sort = document.getElementById("sort");

    //Sorts the fruits array in alphabetical order
    var sortFruits = fruits.sort();
    sortFruits = fruits.join("<br>");

    sort.innerHTML = sortFruits;
}

function reversingArrays() {
    var fruits = ["Banana", "Apple", "Mango", "Pear"];
    var reverse = document.getElementById("reverse");

    //Reverses the order of the fruits array
    var reverseFruits = fruits.reverse();
    reverseFruits = fruits.join("<br>");

    //Displays the array
    reverse.innerHTML = reverseFruits;
}

function concatArrays() {

    var fruits = ["Banana", "Apple", "Mango", "Pear"];
    var moreFruits = ["Orange", "Watermelon", "Papaya", "Pineapple"];

    var concat = document.getElementById("concat");

    //Concatenates the fruits array with the moreFruits array
    var concatFruits = fruits.concat(moreFruits);

    concatFruits = concatFruits.join("<br>");

    concat.innerHTML = concatFruits;
}
