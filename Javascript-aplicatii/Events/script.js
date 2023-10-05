function paragraf1(x) {
  x.style.color = "red";
}

function paragraf2(y) {
  y.style.textDecoration = "underline";
}

function paragraf3(y) {
  y.style.textTransform = "uppercase";
}

function fundal1(a) {
  a.style.backgroundColor = "green";
}

function fundal2(a) {
  a.style.backgroundColor = "grey";
}

/*function paginaNoua(x) {
  x.window.location = "https://www.google.com";
}*/

document.getElementById("p3").innerHTML = "aaa";
document.firstElementChild.lastElementChild.style.backgroundColor = "yellow";
document.getElementsByClassName("paragraf")[2].style.color = "green";
document.getElementsByTagName("p")[0].style.textTransform = "uppercase";
document.getElementsByTagName("h1")[0].style.color = "blue";
document.getElementsByTagName("h1")[0].style.backgroundColor = "pink";
document.getElementsByTagName("h1")[0].style.width = "220px";
document.getElementsByTagName("h1")[0].style.textAlign = "center";
document.getElementsByTagName("h1")[0].style.margin = "0";
document.getElementsByTagName("h1")[0].style.padding = "1rem";

document.getElementById("btn").addEventListener("click", clickMe);
function clickMe() {
  alert("Tu chiar nu ai treaba?");
}

document.getElementById("btn").addEventListener("click", audio);
function audio(param) {
  new Audio("hallo.wav").play();
}

//contor caractere ramase;
const observatiiIntroduse = document.getElementById("text");
const litereRamase = document.getElementById("litere");
const maximLitere = document.getElementById("maxim");
observatiiIntroduse.addEventListener("input", updateLitereRamase);
function updateLitereRamase(event) {
  const textIntrodus = event.target.value;
  const textIntrodusLength = textIntrodus.length;
  const textRamas = 100 - textIntrodusLength;
  litereRamase.textContent = textRamas;
}
