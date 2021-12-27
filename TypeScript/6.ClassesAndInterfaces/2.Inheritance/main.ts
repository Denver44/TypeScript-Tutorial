class Department {
  static fiscalyear = 2021;
  // private employees: string[] = [];
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    // validation etc
    // this.id = 'd2';
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
  static currentFiscalYear() {
    return Department.fiscalyear;
  }
}

// ITDEPARTMENT

class ITDepartment extends Department {
  constructor(id: string, admins: string) {
    super(id, "IT");
    this.admins = admins;
  }
}

const it = new ITDepartment("d1", "Max");

it.addEmployee("Max");
it.addEmployee("Manu");

// it.employees[2] = 'Anna';

it.describe();
it.name = "Tokyo";
it.printEmployeeInformation();
console.log(it);

// ACCOUNTING DEPART

class AccountingDepartment extends Department {
  private lastReport: string;
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }
  // GETTERS
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report Found");
  }

  set mostRecentReport(text: string) {
    if (!text) return;
    else this.addReport(text);
  }

  addEmployee(employee: string) {
    if (employee === "DENVER") return;
    else this.employees.push(employee);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const accounting = new AccountingDepartment("#5678", []);
accounting.printReports();
accounting.addEmployee("Denver");
accounting.addEmployee("Tokyo");
accounting.addEmployee("rio");
accounting.printEmployeeInformation();
accounting.addReport("REPORT IS FINE...................");
console.log(accounting.mostRecentReport);
accounting.mostRecentReport = "REPORT2 IS ALSO FINE.....";
console.log(accounting.mostRecentReport);
console.log("----------------");
accounting.printReports();
let obj = Department.currentFiscalYear();
console.log("Current Fiscal year : ", obj);



