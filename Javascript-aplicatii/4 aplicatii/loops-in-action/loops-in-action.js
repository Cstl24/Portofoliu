//first example: sum numbers

const calculateSumButtonElement = document.querySelector("#calculator button");

function calculateSum() {
  const userNumberInputElement = document.getElementById("user-number").value;

  let sumUpToNumber = 0;
  for (i = 0; i <= userNumberInputElement; i++) {
    sumUpToNumber = sumUpToNumber + i;
  }
  const outputResultElement = document.getElementById("calculated-sum");
  outputResultElement.textContent = sumUpToNumber;
  outputResultElement.style.display = "block";
}

calculateSumButtonElement.addEventListener("click", calculateSum);

//highlights-links

const highlightsLinksButtonElement = document.querySelector(
  "#highlight-links button"
);

function highlightLinks() {
  const anchorElements = document.querySelectorAll("#highlight-links a");

  for (const anchorElement of anchorElements) {
    anchorElement.classList.add("highlight");
  }
}
highlightsLinksButtonElement.addEventListener("click", highlightLinks);

//Your information
const yourInformation = {
  firstName: "Costel",
  lastName: "Fodor",
  age: "48 ani",
};

const displayUserDataButtonElement =
  document.querySelector("#user-data button");

function displayUserData() {
  const outputDataElement = document.getElementById("output-user-data");
  outputDataElement.innerHTML = "";

  for (const x in yourInformation) {
    const newUser = document.createElement("li");
    outputText = x + ": " + yourInformation[x];
    newUser.textContent = outputText;
    outputDataElement.append(newUser);
  }
}

displayUserDataButtonElement.addEventListener("click", displayUserData);

//Statistics / Roll the dice

const rollDiceButtonElement = document.querySelector("#statistics button");

function roolDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function deriveNumberOfDiceRolls() {
  //const targetNumberInputElement =
  //document.getElementById("user-target-number");
  const diceRollsListElement = document.getElementById("dice-rolls");

  const enteredNumber = document.getElementById("user-target-number").value;
  diceRollsListElement.innerHTML = "";

  let hasRolledTargetNumber = false;
  let numberOfRolls = 0;

  while (!hasRolledTargetNumber) {
    const rolledNumber = roolDice();
    numberOfRolls++;
    const newRollListElement = document.createElement("li");
    const outputText = "Roll " + numberOfRolls + ": " + rolledNumber;
    newRollListElement.textContent = outputText;
    diceRollsListElement.append(newRollListElement);
    hasRolledTargetNumber = rolledNumber == enteredNumber;
  }

  const outputTotalRollsElement = document.getElementById("output-total-rolls");
  const outputTargetNumberElement = document.getElementById(
    "output-target-number"
  );

  outputTargetNumberElement.textContent = enteredNumber;
  outputTotalRollsElement.textContent = numberOfRolls;
}

rollDiceButtonElement.addEventListener("click", deriveNumberOfDiceRolls);
