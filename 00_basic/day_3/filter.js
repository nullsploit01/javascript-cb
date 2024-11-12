const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const isOdd = (number) => {
  return number % 2 === 1;
};

const oddNumbers = numbers.filter(isOdd);
console.log(oddNumbers);
