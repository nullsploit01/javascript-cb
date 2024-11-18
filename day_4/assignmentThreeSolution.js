const findLargestNumber = (array) => {
  if (array.length === 0) return undefined;

  let largest = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > largest) {
      largest = array[i];
    }
  }
  return largest;
};

const numbers = [1, 2, 3, 4, 5, 6, 7];
const largestNumber = findLargestNumber(numbers);
console.log(largestNumber);
