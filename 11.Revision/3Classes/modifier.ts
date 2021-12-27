class Vehicle {
  protected honk(): string {
    return 'beep beep';
  }
  brokenState(): void {
    console.log('No broken');
  }
}

class FourWheelerCar extends Vehicle {
  private drive(): string {
    return 'speed speed';
  }
  color(color: string): void {
    console.log('The color of Car is ', color);
  }
  drivingProcess(): void {
    console.log('start your driving at ', this.drive(), ' pace');
  }
  shouldIHonk(): void {
    console.log('I can Honk ', this.honk());
  }
}

// Instances of our class

const vehicle = new Vehicle();
// vehicle.honk(); // Not accessible as it is protected
vehicle.brokenState();

const firstCar = new FourWheelerCar();
// firstCar.drive(); // not accessible as private
firstCar.drivingProcess();
firstCar.shouldIHonk();
firstCar.color('black');
