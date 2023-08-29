let paragraphElement = document.querySelector('p');

function changeParagraphText(event) {
paragraphElement.textContent = 'Clicked!';
console.log('Clicked!');
console.log(event);
}

//function changeParagraphText1() {
//paragraphElement.textContent = 'Chiar nu ai ce face???';
//console.log('Clicked!')
//}

//function dubluClick() {
    //paragraphElement.textContent = 'HAI SIKTIR!!!'
   // console.log("doubleClicked!");
//}

paragraphElement.addEventListener('click', changeParagraphText)

//paragraphElement.addEventListener("dblclick", dubluClick);

function retriveUserInput(event) {
    //let enteredText = inputElement.value;
    let enteredText = event.target.value;
    console.log(enteredText);
    //console.log(event);
}

let inputElement = document.querySelector('input');
inputElement.addEventListener('input',retriveUserInput )