class Animal {
  name;
  color;

  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  printName() {
    console.log(this.name);
  }
}

const dog = new Animal("dog", "white");
dog.printName();

const cat = new Animal("cat", "orange");
cat.printName();

console.log(cat.color);
