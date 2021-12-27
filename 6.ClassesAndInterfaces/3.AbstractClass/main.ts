abstract class Department {
  id: number;
  protected employees: string[] = [];
  constructor(id: string, public name: string) {}

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }

  abstract describe(this: Department): void;
}

class ITDepartment extends Department {
  admins: string;
  constructor(id: string, admins: string) {
    super(id, "IT");
    this.admins = admins;
  }

  describe() {
    console.log("The department is ", this.name);
  }
}

const it = new ITDepartment("d1", "Max");

it.addEmployee("HEENA");
it.addEmployee("MEENA");
it.addEmployee("LEENA");
it.printEmployeeInformation();
it.describe();
