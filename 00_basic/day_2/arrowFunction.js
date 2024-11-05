const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

console.log(isPrime(29));

// write a function to calculate farenheit temperature to celsius.
// formula -> (F - 32) * 5/9
