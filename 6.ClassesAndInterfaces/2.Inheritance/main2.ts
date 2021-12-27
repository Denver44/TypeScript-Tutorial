class Department {
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

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
}

// IT DEPARTMENT

class ITDepartment extends Department {
  admin: string;
  constructor(id: string, admin: string) {
    super(id, "IT"); // Calling Base class Constructor first called super before using this(keyword).
    this.admin = admin;
  }

  printITDeparmentInfo() {
    console.log(
      `The ID is ${this.id} and the Department is ${this.name} and the admin is ${this.admin}`
    );
  }
}

const it = new ITDepartment("d1", "Max");

it.addEmployee("Max");
it.addEmployee("Manu");
it.describe();
it.printEmployeeInformation();
it.printITDeparmentInfo();
