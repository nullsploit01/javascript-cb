// Given an array of numbers, remove all duplicates from it.
// Input: [1, 2, 3, 1, 2, 3]
// Output: [1, 2, 3]

const numbers = [1, 2, 3, 1, 2, 3];
const uniqueNumbers = [];

for (let i = 0; i < numbers.length; i += 1) {
  if (!uniqueNumbers.includes(numbers[i])) {
    uniqueNumbers.push(numbers[i]);
  }
}

console.log(uniqueNumbers);
