for (let i = 2; i <= 100; i += 1) {
  let isPrime = true;

  for (let j = 2; j < i; j += 1) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(`number ${i} is prime`);
  }
}
