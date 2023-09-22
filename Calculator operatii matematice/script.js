//adunare
function PornireCalculare() {
  interval = setInterval("Calculare()", 1);
}
function Calculare() {
  primul = document.adunare.x1.value;
  alDoilea = document.adunare.x2.value;
  document.adunare.x3.value = primul * 1 + alDoilea * 1;
}
function Oprire() {
  clearInterval(interval);
}

//scadere
function PornireCalculare1() {
  interval = setInterval("Calculare1()", 1);
}
function Calculare1() {
  primul = document.scadere.y1.value;
  alDoilea = document.scadere.y2.value;
  document.scadere.y3.value = primul * 1 - alDoilea * 1;
}
function Oprire1() {
  clearInterval(interval);
}

//inmultire
function PornireCalculare2() {
  interval = setInterval("Calculare2()", 1);
}
function Calculare2() {
  primul = document.inmultire.v1.value;
  alDoilea = document.inmultire.v2.value;
  document.inmultire.v3.value = primul * 1 * alDoilea * 1;
}
function Oprire2() {
  clearInterval(interval);
}

//impartire
function PornireCalculare3() {
  interval = setInterval("Calculare3()", 1);
}
function Calculare3() {
  primul = document.impartire.z1.value;
  alDoilea = document.impartire.z2.value;
  document.impartire.z3.value = ((primul * 1) / alDoilea) * 1;
}
function Oprire3() {
  clearInterval(interval);
}


