const inventory = {
  items: {},

  addItem: function (key, value) {
    if (this.items[key]) {
      this.items[key] += value;
    } else {
      this.items[key] = value;
    }
  },

  getItem: function (key) {
    if (this.items[key] !== undefined) {
      return { [key]: this.items[key] };
    } else {
      return `Item "${key}" not found in inventory.`;
    }
  },

  deleteItem: function (key) {
    if (this.items[key] !== undefined) {
      delete this.items[key];
      return `Item "${key}" removed from inventory.`;
    } else {
      return `Item "${key}" not found in inventory.`;
    }
  },

  modifyItem: function (key, value) {
    if (this.items[key] !== undefined) {
      this.items[key] = value;
      return `Item "${key}" updated to ${value}.`;
    } else {
      return `Item "${key}" not found in inventory.`;
    }
  },
};

console.log(inventory.items);

inventory.addItem("Apples", 35);
inventory.addItem("Strawberry", 30);
inventory.addItem("Apples", 50);

console.log(inventory.items);

console.log(inventory.getItem("Apples"));
console.log(inventory.getItem("Bananas"));

console.log(inventory.deleteItem("Strawberry"));
console.log(inventory.items); // { Apples: 85 }

console.log(inventory.modifyItem("Apples", 100));
console.log(inventory.items);

console.log(inventory.modifyItem("Bananas", 20));
