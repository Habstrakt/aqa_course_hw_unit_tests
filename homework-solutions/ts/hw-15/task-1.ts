interface IVehicle {
  getDetails(): string;
  start(): string;
};

abstract class Vehicle implements IVehicle {
  constructor(public make: string, public model: string) {}

  start(): string {
    return `The vehicle ${this.make} ${this.model} is starting.`;
  }

  abstract getDetails(): string;
}

class Car extends Vehicle {
  constructor(public make: string, public model: string, public year: number) {
    super(make, model);
  }
  getDetails(): string {
    return `${this.make} ${this.model}, ${this.year}`;
  }
}

const myCar = new Car('Toyota', 'Camry', 2023);
console.log(myCar.getDetails());
console.log(myCar.start());


