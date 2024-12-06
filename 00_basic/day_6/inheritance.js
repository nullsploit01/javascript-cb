class Animal {
  name;

  constructor(name) {
    this.name = name;
  }

  printName() {
    console.log(this.name);
  }
}

class Dog extends Animal {
  age;
  constructor(name, age) {
    super(name);
    this.age = age;
  }

  printAge() {
    console.log(this.age);
  }
}

const myDog = new Dog("max", 16);
myDog.printName();
myDog.printAge();

const myAnimal = new Animal("giraffe");
myAnimal.printName();
