"use strict";
var Department = /** @class */ (function () {
    function Department(name, id) {
        this.name = name;
        this.employees = [];
        this.name = name;
        this.id = id;
    }
    Department.prototype.describe = function () {
        console.log("This is " + this.name + " Department & ID : ", this.id);
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.totalEmployee = function () {
        console.log(this.employees.length);
    };
    Department.prototype.printEmployee = function () {
        console.log(this.employees);
    };
    return Department;
}());
var s1 = new Department("Accounting", 1);
var s2 = new Department("Fire", 2);
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
