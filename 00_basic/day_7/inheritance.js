class Vehicle {
  numberOfWheels;
  color;
  passangerCapacity;

  constructor(numberOfWheels, color, passangerCapacity) {
    this.color = color;
    this.numberOfWheels = numberOfWheels;
    this.passangerCapacity = passangerCapacity;
  }

  move() {
    console.log("moving vehicle, brrr");
  }

  stop() {
    console.log("vehicle is stopping");
  }
}

class Car extends Vehicle {
  numberOfWindows;
  horsePower;
  mileage;
  engineType;

  constructor(
    numberOfWheels,
    color,
    passangerCapacity,
    numberOfWindows,
    horsePower,
    mileage,
    engineType
  ) {
    this.numberOfWindows = numberOfWindows;
    this.horsePower = horsePower;
    this.mileage = mileage;
    this.engineType = engineType;
    super(numberOfWheels, color, passangerCapacity);
  }

  soundHorn() {
    console.log("sounding car's horn, beep!");
  }

  openDoors() {
    console.log("opening car's door!");
  }
}

class Bike extends Vehicle {}
