//10-DEC-2022
//Control Flow Exercises
//Exercise 1: Password Check
let password = "hi";
if (password.length > 7){
  console.log("true");
}
else {
  console.log("false");
}

//Exercise 2: Height Test
let height = "cpoo";
if (height >= 150) {
  console.log("You can go on the ride");
}

else if (typeof height !== Number) {
  console.log("Please enter a number")
}

else {
  console.log("Sorry you are not tall enough")
}

//Exercise 3: Dice Prize
let randomNumber1 = Math.floor(Math.random() * 6 ) + 1;
console.log(randomNumber1);

let randomNumber2 = Math.floor(Math.random() * 6 ) + 1;
console.log(randomNumber2);

if ((randomNumber1 + randomNumber2) > 11) {
console.log(`You win a bear!`);
}

else if ((randomNumber1 === randomNumber2) && (randomNumber1 + randomNumber2 !== 12)) {
console.log(`You win three free throws!`);
}

else if ((randomNumber1) !== (1 || 3 || 5)) {
  console.log(`You win one free throw!`);
}

else if ((randomNumber2) !== (1 || 3 || 5)) {
  console.log(`You win one free throw!`);
}

else {
  console.log(`You lose!`);
}
