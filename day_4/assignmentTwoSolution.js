const combineUniqueElements = (arrayOne, arrayTwo) => {
  const uniqueElements = [];

  const addUniqueItems = (fromArray) => {
    for (let i = 0; i < fromArray.length; i++) {
      if (uniqueElements.indexOf(fromArray[i]) === -1) {
        uniqueElements.push(fromArray[i]);
      }
    }
  };

  addUniqueItems(arrayOne);
  addUniqueItems(arrayTwo);

  return uniqueElements;
};

const arrayOne = [1, 2, 3, 4, 5, 6];
const arrayTwo = [4, 5, 6, 7, 8, 9];
const result = combineUniqueElements(arrayOne, arrayTwo);
console.log(result);
