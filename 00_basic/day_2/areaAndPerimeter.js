// write 2 functions to print area and perimeter of a rectangle

const length = 52;
const width = 25;

const calculateArea = () => {
  return length * width;
};

const calculatePerimeter = () => {
  return 2 * (length + width);
};

console.log(calculateArea());
console.log(calculatePerimeter());
