let animal = "dog";

const changeAnimalToCat = () => {
  animal = "cat";
  console.log(animal, "inside changeAnimalToCat");
};

console.log(animal, "before changing globally");
changeAnimalToCat();
console.log(animal, "after changing globally");
