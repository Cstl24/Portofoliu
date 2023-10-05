/*function limonada(apa, lamai) {
  var instructiuni = "Pune " + apa + " ml apa si stoarce " + lamai + " lamai";
  return instructiuni;
}
limonada(200, 2);
alert(limonada(200, 2));

function produs(x, y) {
  rezultat = x * y;
  return rezultat;
}
alert(produs(2, 5));

function produs2(a, b) {
  document.write(a * b, " ");
}
produs2(5, 20);
produs2(25, 6);

//array
var materii = ["romana", "matematica", "biologie", "chimie"];
alert(materii[3]);

//array.shift - se elimina primul element din array
alert(materii.shift());
alert(materii);

//array.unshift - adauga un element la inceput
materii.unshift("fizica");
alert(materii);

//array.push - adauga element nou la final de array
materii.push("sport");
alert(materii);

//array.pop - elimina un element de la finalul array
materii.pop();
alert(materii);

//array.splice - inlocuieste un element cu alt element
materii.splice(0, 1, "geografie");
alert(materii);

//array.sort - ordoneaza alfabetic
materii.sort();
alert(materii);

var numarPrompt = parseInt(prompt("Scrie un numar"));
if (numarPrompt > 10) {
  document.write("Numar mare");
} else {
  document.write("Numar mic");
}

//if-else if-else
var luna1 = parseInt(prompt("Introdu greutatea din prima luna"));
var luna2 = parseInt(prompt("Introdu greutatea din a doua luna"));
var luna3 = parseInt(prompt("Introdu greutatea din a treia luna"));
var total = (luna1 + luna2 + luna3) / 3;
if (total < 80) {
  prompt("Greutate buna!");
} else if (total > 80 && total < 100) {
  prompt("Aproape bine!");
} else prompt("Graaaasuuuuleeee!!!!!!");

var a = 5 + 4;
prompt("scrie cat este 5+4");
switch (a) {
  case 9:
    alert("Esti tare!");
  break;
  case 10:
    alert("Aproape!");
  break;
  default:
    alert("Esti cel mai idiot!");
}

var numar = parseInt(prompt("Alege un numar intre 1 si 3!"));
switch (numar) {
  case 1:
    alert("Ai introdus numarul 1!");
    break;
  case 2:
    alert("Ai introdus numarul 2!");
    break;
  case 3:
    alert("Ai introdus numarul 3!");
    break;
  default:
    alert("Esti un bou/o vaca!");
};

//for statement
var x = parseInt(prompt("Scrie un numar!"));
for (i = 1; i <= x; i++) {
  alert("Numarul este" + i);
}

//for-break
var x = parseInt(prompt("Scrie un numar!"));
for (i = 1; i <= x; i++) {
  if (i == 4) {
    break;
  }
  alert("Numarul este" + i);
}

//for-continue
var x = parseInt(prompt("Scrie un numar!"));
for (i = 1; i <= x; i++) {
  if (i == 4) {
    continue;
  }
  alert("Numarul este" + i);
}

var x = parseInt(prompt("Scrie un numar!"));
for (i = 1; i <= x; i++) {
  if (i % 3 == 0) {
    continue;
  }
  alert("Numarul este" + i);
}

//sa se afiseze toate numerele de la 0 la 20 iar pentru fiecare numar afisat sa se mentioneze daca este par/impar
for (i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    document.write(i + " este numar par" + "</br>");
  } else {
    document.write(i + " este numar impar" + "</br>");
  }
}

//fizzbuzz - numerele de la 0 la 100, multipli de 3 - fizz, multiplii de 5 buzz, multiplii de 3 si 5 - fizzbuzz
for (i = 1; i <= 100; i++) {
  if (i % 15 === 0) {
    document.write("fizzbuzz" + "</br>");
  } else if (i % 5 === 0) {
    document.write("buzz" + "</br>");
  } else if (i % 3 === 0) {
    document.write("fizz" + "</br>");
  } else {
    document.write(i + "</br>");
  }
}

var numar1 = parseInt(prompt("Scrie un numar de la 1 la 10"));
var numar2 = parseInt(prompt("Scrie un numar de la 11 la 20"));
var suma = parseInt(numar1 + numar2);
alert("Suma este" + suma);*/

