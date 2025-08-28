function checkEvenOdd(number) {
  if (number % 2 === 0) {
    return number + " is Even";
  } else {
    return number + " is Odd";
  }
}

console.log(checkEvenOdd(7));  // Output: 7 is Odd
console.log(checkEvenOdd(12)); // Output: 12 is Even
