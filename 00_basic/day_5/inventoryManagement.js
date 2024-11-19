const inventory = {
  items: {},

  addItem: function (key, value) {
    if (this.items[key]) {
      this.items[key] += value;
    } else {
      this.items[key] = value;
    }
  },
};

console.log(inventory.items); // {}

inventory.addItem("Apples", 35);
inventory.addItem("Strawberry", 30);
inventory.addItem("Apples", 50);

console.log(inventory.items);
