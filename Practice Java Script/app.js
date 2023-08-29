let age = 48;
let userName = "Costel";
let hobbies = ["Sports", "Cooking", "Reading"];
let job = {
  title: "Developer",
  place: "Constanta",
  salary: 50000,
};

let totalAdultYears;

function calculateAdultYears(userAge) {
  return userAge - 18;
}

totalAdultYears = calculateAdultYears(age);
calculateAdultYears();
console.log(totalAdultYears);

age = 30;
totalAdultYears = calculateAdultYears(age);
console.log(totalAdultYears);

let person = {
  name: "Costel",
  greet() {
    console.log("Hello!");
  },
};

person.greet();
