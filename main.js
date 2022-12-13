// (function helloWorld() {
// console.log("Hello, World!")
// })();


//exercise 1
function helloWorld() {
  return console.log("Hello, World!")
  }
  
  console.log(helloWorld());
  
  //exercise 2
  function quadrupler(num) {
  
    return num * 4;
  }
  console.log(quadrupler(5));
  
  //exercise 3
  
  function welcome(firstName, lastName) {
    return "Hello " + firstName + " " + lastName + ", how can I help you?";
  }
  
  let firstName = "DAVE";
  let lastName = "KAY";
  
  console.log(welcome(firstName, lastName.toLowerCase()));
  
  //exercise 4
  function temperatureConverter(f) {
    return c = (f - 32) * (5/9) 
  }
  temperatureConverter(70);
  console.log(c);
  temperatureConverter(80);
  console.log(c);
  temperatureConverter(90);
  console.log(Math.floor(c));
 
  /*
//exercise 5
  console.log("Exercise 5")
  let name = Dav;
  let age = 24;
    let dogYears;

  function dogAge(age) {
  
  
  if (age <= 15 ) {
    dogYears = age / 15;
  } 
  
  else if (age > 15 && age < 24 ) {
    dogYears = (age - 15) / (9 + 1); 
  }
  
  else {
    dogYears = (age - 24) / (5 + 2); 
  }
  return dogYears.toFixed(1);
  }

  console.log(dogAge);
*/

  //exercise 6
  console.log("Exercise 6");
  function calculator(num1, operator, num2) {

    if (operator = "*"){
      return (num1 * num2);
    }

      else if (operator = "+"){
        return (num1 + num2);
      }

      else if (operator = "-") {
        return (num1 - num2);
      }

      else if (operator = "/") {
        return (num1 / num2);
      }
  }

  console.log(calculator(14, " / ", 7));


//Exercise 7
function min(a, b) {
  return Math.min(a, b);
}

console.log(min(4, 8));

// Exercise 8
function pow(x, n) {
  return Math.pow(x, n);
}

console.log(Math.pow(4, 2));