//Math operations

console.log(10 + 4);
console.log(10 - 4);
console.log(10 * 4);
console.log(10 / 4);
console.log(10 % 4); //10/4=2 rest 2 => 2
console.log(10 % 3); //10/3=3 rest 1 => 1
console.log(2 + 5 * 3 - 1.5);
console.log(2 + 5 * 3 - 1.5 + 10);

let result = 2 + 5 * 3 - 1.5 + 10;
console.log(result); //result = 25.5
result = result + 1;
console.log(result);
result++;
console.log(result); //result = result + 1
result--;
console.log(result); //result = result - 1
result += 5;
console.log(result); //result = result + 5

console.log("Fodor" + " " + "Costel");
console.log("Fodor" - "odo"); //result = NaN

let userName = "Costel";
console.log(userName.length);
console.log(userName.toUpperCase());

let hobbies = ["Sports", "Cooking"];
console.log(hobbies.length);
