const productNameInputElement = document.getElementById("product-name");
const remainingCharsElement = document.getElementById("remaining-chars");

//console.dir(productNameInputElement);

const maxAllowedChars = productNameInputElement.maxLength;

function updateRemainingCharacters(event) {
  const enteredText = event.target.value;
  const enteredTextLength = enteredText.length;

  const remainingCharacters = maxAllowedChars - enteredTextLength;
  if (remainingCharacters <= 10 && remainingCharacters >= 1) {
    document.getElementById("product-name").style.backgroundColor = "yellow";
  } else if (remainingCharacters <= 1) {
    document.getElementById("product-name").style.backgroundColor = "red";
  }

  remainingCharsElement.textContent = remainingCharacters;
}

//const spanElement = document.getElementById("remaining-chars");
//spanElement.className = "warning";

productNameInputElement.addEventListener("input", updateRemainingCharacters);
