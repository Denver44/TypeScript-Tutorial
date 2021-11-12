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
