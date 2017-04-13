var str = "a dog walked in off a street and ordered the finest beer";
var regExp = /\ba\b/g;
var res = str.replace(regExp, "the");
alert(res);