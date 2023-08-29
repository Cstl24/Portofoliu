let anchorElement = document.getElementById("external-link");
anchorElement.href = "https://google.com";

anchorElement = document.querySelector("a");
anchorElement.href = "https://academind.com";

//ADD AN ELEMENT
//1.CREATE THE NEW ELEMENT

let newAnchorElement = document.createElement("a");
newAnchorElement.href = "https://google.com";
newAnchorElement.textContent = "This leads to Google!";

//2.GET ACCES TO THE PARENT THET SHOULD HOLD THE NEW ELEMENT

let firstParagraph = document.querySelector("p");

//3.INSERT THE NEW ELEMENT IN TO THE PARENT ELEMENT

firstParagraph.append(newAnchorElement);

//REMOVE ELEMENTS
//1. Select the element

let firstH1Elemnt = document.querySelector("h1");

//2. Remove it!
firstH1Elemnt.remove();

//firstH1Elemnt.parentElement.removeChild(firstH1Elemnt); //for older browsers

// MOVE ELEMENTS

firstParagraph.parentElement.append(firstParagraph);

//inner HTML

console.log(firstParagraph.innerHTML);
//console.log(firstParagraph.textContent);

firstParagraph.innerHTML = "Hi! This is <strong>important</strong>!";
