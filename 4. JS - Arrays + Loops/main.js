// Array Questions
//Arrays Exercise 1:
const breakfast = ["egg", "bacon", "sasauge", "toast", "mushroom"];
breakfast.push("hash brown");
breakfast.unshift("tomato");
console.log(breakfast);
console.log(breakfast.length);
console.log(Array.isArray(breakfast))

//Arrays Exercise 2:
const transport = ["car", "train", "boat"];
function arrayLength(arr) {
  const len = arr.length;
  return console.log('the last item in this array is ${len}');
}
arrayLength(transport);
console.log('Accessing Element', transport[2]);

//Arrays Exercise 3:
const musicGenres = ["Rock", "Rap"];
const mid = ((musicGenres.length)/2);
musicGenres.push("Jazz");
musicGenres.splice(mid, 0, "Classical");
musicGenres.unshift("Blues", "Reggage");
console.log(musicGenres);

//Arrays Exercise 4:
//Using breakfast array as code from Exercise 1
function Alphabet(alph) {
  return console.log('the alphabetised array for the selected constant is')
}
Alphabet(breakfast);
breakfast.sort();
console.log(breakfast);

//Loop Exercises
//Loops Exercise 1:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

/* This loop counted from 1-10
for (let idx = 1; idx < numbers.length; idx++) {
  console.log(idx);
}
*/

for (let idx = 10; idx > 0; idx--) {
  console.log(idx);
}

/*
//Loops Exercise 2:
const tasks = ["dishes", "hoover", "dust"]
for (let idx = 10; idx > 0; idx--) {
  `Task ${I+1}: ${tasks[i]}`
}
*/


//Loop Exercise 3:

/*
let i = 3;
while (i) {
  alert(i--);
}

2 is the last to be altered.
*/

//Loop Exercise 4:

/*
const numbers = [1, 2, 3, 4, 5];

for (let i=0; i<numbers.length, idx*2) {
  console.log(idx);
}
or should end as in the screenshot

console.log(numbers)
*/


//ForEach Exercises
//ForEach Exercise 1:
const favFood = ["bagels", "pizza", "pasta", "peas"];
favFood.forEach((item) => {
console.log(item.toUpperCase());
});

//ForEach Exercise 2:
const numArray = [1, 2, 3, 4, 5, 6];
function sum(arr){
  let sum = 0;
  arr.forEach((item) => {
    sum += item;
  });

  return sum;
}
 console.log(sum(numArray));

//ForEach Exercise 3:
function product(arr){
  let product = 1;
  arr.forEach((item) => {
    product *= item;
  });
  return product;
}
console.log(product(numArray));




//ForEach Exercise 4:
const studentGrades = [70, 20, 53, 64, 78, 60, 32]
function passedGrades(arr){
let passedGrades = 50;

arr.forEach((item) => {
  50;
})
  return passedGrades;
}
console.log(studentGrades)




//Map Exercises
//Map Exercise 1
const kilometers = [1, 2, 3, 4, 5];

