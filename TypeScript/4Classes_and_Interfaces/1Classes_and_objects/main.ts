class Department {
  // public name: string; shorthand trick
  private readonly id: Number;
  private employees: string[] = [];
  constructor(public name: string, id: number) {
    this.name = name;
    this.id = id;
  }

  describe(this: Department) {
    console.log("This is " + this.name + " Department & ID : ", this.id);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  totalEmployee() {
    console.log(this.employees.length);
  }
  printEmployee() {
    console.log(this.employees);
  }
}

const s1 = new Department("Accounting", 1);
const s2 = new Department("Fire", 2);

s1.addEmployee("MAX");
s1.addEmployee("Manu");
s1.printEmployee();
s1.totalEmployee();
// s1.employees[2] = "ANNA";
s1.name = "TAX";
// s1.id = 88; // throws error
s1.printEmployee();
s1.totalEmployee();
s1.describe();

// const s1copy = { name: "DUMMY", describe: s1.describe };
// console.log(s1copy.describe());

// Private and Public keyword is used to make variable private and public to access.
