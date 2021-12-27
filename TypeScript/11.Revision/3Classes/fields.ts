class Vehicle {
  wheels: number = 4;
  //    or
  // color: string;
  // constructor(color: string) {
  //   this.color = color;
  // }
  //     or (ShortHand)
  constructor(public color: string) {}

  // constructor(public engine: string) {}
  // constructor(protected glassType: string) {}
  // constructor(private carMode: string) {}

  protected honk(): string {
    return 'beep beep';
  }
  brokenState(): void {
    console.log('No broken');
  }
}

class FourWheelerCar extends Vehicle {
  constructor(public fuelType: string, color: string) {
    super(color);
  }

  private drive(): string {
    return 'speed speed';
  }

  drivingProcess(): void {
    console.log('start your driving at ', this.drive(), ' pace');
  }

  shouldIHonk(): void {
    console.log('I can Honk ', this.honk());
  }
}

const vehicle = new FourWheelerCar('petrol', 'yellow');
vehicle.brokenState();
console.log(vehicle.color);
console.log(vehicle.fuelType);
console.log(vehicle.wheels);
vehicle.drivingProcess();
vehicle.shouldIHonk();
