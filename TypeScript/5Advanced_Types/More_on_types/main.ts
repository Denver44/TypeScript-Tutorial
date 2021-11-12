type admins = {
  name: string;
  privileges: string[];
};

type employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = admins & employee;

const e1: ElevatedEmployee = {
  name: "Max",
  privileges: ["root-user"],
  startDate: new Date(),
};

console.log(e1);

// We can achieve this using interface also. Both are same but in type we have to write few line less and we can use conjunction in type.

interface admins1 {
  name: string;
  privileges: string[];
}

interface employee1 {
  name: string;
  startDate: Date;
}

interface ElevatedEmployee1 extends admins1, employee1 {}

const e2: ElevatedEmployee1 = {
  name: "Min",
  privileges: ["sudo-user"],
  startDate: new Date(),
};

console.log(e2);

type Combinable = string | number;
type Numeric = boolean | number;
type Universal = Combinable & Numeric;

// Adding TypeGuard

function add(a: Combinable, b: Combinable) {
  // Here this if condition works as a typeGuard.
  if (typeof a === "string" || typeof b === "string")
    return a.toString() + b.toString();

  return a + b;
}

type UnknownEmployee = employee | admins;

function printEmployee(emp: UnknownEmployee) {
  // in keyword work as typeguard
  console.log("Name :- ", emp.name);
  if ("privileges" in emp) {
    console.log("Privileges :- ", emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("StartDate :- ", emp.startDate);
  }
}
console.log("-------------");

printEmployee(e2);
printEmployee(e1);

const e3: UnknownEmployee = {
  name: "Maximum",
  privileges: ["root-user1"],
};
printEmployee(e3);

class Car {
  drive() {
    console.log("Driving.....");
  }
}

class Truck {
  drive() {
    console.log("Driving.....Truck");
  }
  LoadCargo(amount: number) {
    console.log("Driving.....LoadCargo of ", amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) vehicle.LoadCargo(100);
}

useVehicle(v1);
useVehicle(v2);
