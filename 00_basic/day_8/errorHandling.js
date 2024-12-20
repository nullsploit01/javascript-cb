const sumOfArray = (array, numberOfElements) => {
  try {
    let sum = 0;

    if (numberOfElements > array.length) {
      throw "numberOfElements cannot be greater than length of array";
    }

    for (let i = 0; i < numberOfElements; i += 1) {
      sum += array[i];
    }

    return sum;
  } catch {
    console.log("error occured");
  } finally {
    console.log("over");
  }
};

console.log(sumOfArray([1, 2, 3, 4], 4));
