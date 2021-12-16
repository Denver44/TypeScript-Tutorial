interface Reportable {
  summary(): string;
  ownerDetail: () => string;
}

interface Vehicle extends Reportable {
  name: string;
  year: number;
  broken: boolean;
  date: Date;
}

const oldCivic = {
  name: 'Civic',
  year: 2000,
  broken: true,
  date: new Date(),
  summary(): string {
    return 'nice deal to buy';
  },
  ownerDetail(): string {
    return `$Denver's ${this.name}`;
  },
};

const printVehicle = (vehicle: Vehicle): void => {
  console.log(vehicle.name, vehicle.year, vehicle.broken);
  console.log(vehicle.summary());
  console.log(vehicle.ownerDetail());
};
