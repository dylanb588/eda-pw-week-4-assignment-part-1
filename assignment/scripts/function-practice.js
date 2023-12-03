console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  let greeting = 'Hello, ' + name + '!';
  return greeting;
}
// Remember to call the function to test
let name = 'Dylan';
console.log(helloName(name));
// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  let answer = firstNumber + secondNumber;
  // return firstNumber + secondNumber;
  return answer;
}
console.log('5 + 37 is: ', addNumbers( 5, 37 ));

// 4. Function to multiply three numbers & return the result
function multiplyThree(num1, num2, num3) {
  let answer = num1 * num2 * num3;
  return answer;
}
console.log('5 * 2 * 3 is: ', multiplyThree( 5, 2, 3 ));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  }
  return false;
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log('5 is positive: ', isPositive(5));
console.log('-3 is positive: ', isPositive(-3));
// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast(array) {
  if (array.length === 0) {
    return 'undefined';
  } else {
    return array[array.length - 1];
  }
}
let array1=[];
let array2=['Dog', 'Cat', 'Rabbit', 'Cow'];
console.log('Array 1 is: ', getLast(array1));
console.log(array2);
console.log('Array 2 last item is: ', getLast(array2));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find(value, array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
let array3=[5, 6, 7, 8, 9]
console.log('Array 3 has a 5: ', find(5, array3));
console.log('Array 3 has a 1: ', find(1, array3));
console.log('Array 2 has a bird: ', find('Bird', array2));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}


// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;
  // TODO: loop to add items

  // TODO: return the sum
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive() {

}


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!


// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
