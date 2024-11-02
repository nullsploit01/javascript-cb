// if number is divisible by 3 print fizz
// if divisible bny 5, print buzz
// if divisible by both, print fizzbuzz

const number = 15;

if (number % 3 === 0 && number % 5 === 0) {
  console.log("FIZZBUZZ");
} else if (number % 5 === 0) {
  console.log("BUZZ");
} else if (number % 3 === 0) {
  console.log("FIZZ");
}
