var x = document.getElementById("litere");
function lit() {
  20 - x;
}
var y = "javascript";
alert(y.toUpperCase());

//afiseaza Javascript
var primaLitera = y.slice(0, 1);
var literaMare = primaLitera.toUpperCase();
var restulLiterelor = y.slice(1, 10);
var final = literaMare + restulLiterelor;
alert(final);

var z = "CURS";
alert(z);
alert(z.toLowerCase());

//afiseaza "Curs"
var c = z.slice(0, 1);
var urs = z.slice(1, 4);
var ursMic = urs.toLowerCase();
alert(c + ursMic);

var a = 15.3;
//a rotunjit in minus
alert(Math.floor(a));

//a rotunjit in plus
alert(Math.ceil(a));

//2 la puterea 10
alert(Math.pow(2, 10));
