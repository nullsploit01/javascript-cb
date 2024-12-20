class Animal {
  speak() {
    return "Animal Sound";
  }
}

class Dog extends Animal {
  speak() {
    return "Woof";
  }
}

class Cat extends Animal {
  speak() {
    return "Meow!";
  }
}

const dog = new Dog();
console.log(dog.speak());

const cat = new Cat();
console.log(cat.speak());
