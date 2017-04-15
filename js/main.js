var str = "Mmm, I love chocolate, I'm a chocolic. I love candy too, sweet, sugar candy.";
var regExp = /candy|chocolic|chocolate|sugar candy/g;
var res = str.replace(regExp, "salad");
alert(res);