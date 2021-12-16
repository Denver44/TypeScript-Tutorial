class Vehicle {
  drive(): void {
    console.log('Vroom Vroom');
  }
  honk(): void {
    console.log('beep beep');
  }
  brokenState(): void {
    console.log('No broken');
  }
}

class FourWheelerCar extends Vehicle {
  drive(): void {
    console.log('speed speed');
  }
  color(color: string): void {
    console.log('The color of Car is ', color);
  }
}

// Instances of our class

const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();
vehicle.brokenState();

const firstCar = new FourWheelerCar();
firstCar.drive();
firstCar.color('black');
