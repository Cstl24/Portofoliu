function datCuZarul() {
  valoareZar = Math.floor(Math.random() * 6 + 1);
  document.getElementById("valori").append(valoareZar + ", ");
}

const x = document.getElementById("numarul-tinta");

function egalitate() {
  let y = document.getElementById("valori");
  if (x in y) {
    document.getElementById("someText").style.color = "red";
  }
}
