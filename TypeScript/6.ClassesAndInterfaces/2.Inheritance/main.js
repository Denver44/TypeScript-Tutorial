"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = /** @class */ (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        // private employees: string[] = [];
        this.employees = [];
        // this.id = id;
        // this.name = n;
    }
    Department.prototype.describe = function () {
        console.log("Department (" + this.id + "): " + this.name);
    };
    Department.prototype.addEmployee = function (employee) {
        // validation etc
        // this.id = 'd2';
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    Department.currentFiscalYear = function () {
        return Department.fiscalyear;
    };
    Department.fiscalyear = 2021;
    return Department;
}());
// ITDEPARTMENT
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins) {
        var _this = _super.call(this, id, "IT") || this;
        _this.admins = admins;
        return _this;
    }
    return ITDepartment;
}(Department));
var it = new ITDepartment("d1", "Max");
it.addEmployee("Max");
it.addEmployee("Manu");
// it.employees[2] = 'Anna';
it.describe();
it.name = "Tokyo";
it.printEmployeeInformation();
console.log(it);
// ACCOUNTING DEPART
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(id, reports) {
        var _this = _super.call(this, id, "Accounting") || this;
        _this.reports = reports;
        _this.lastReport = reports[0];
        return _this;
    }
    Object.defineProperty(AccountingDepartment.prototype, "mostRecentReport", {
        // GETTERS
        get: function () {
            if (this.lastReport) {
                return this.lastReport;
            }
            throw new Error("No report Found");
        },
        set: function (text) {
            if (!text)
                return;
            else
                this.addReport(text);
        },
        enumerable: false,
        configurable: true
    });
    AccountingDepartment.prototype.addEmployee = function (employee) {
        if (employee === "DENVER")
            return;
        else
            this.employees.push(employee);
    };
    AccountingDepartment.prototype.addReport = function (text) {
        this.reports.push(text);
        this.lastReport = text;
    };
    AccountingDepartment.prototype.printReports = function () {
        console.log(this.reports);
    };
    return AccountingDepartment;
}(Department));
var accounting = new AccountingDepartment("#5678", []);
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
var obj = Department.currentFiscalYear();
console.log("Current Fiscal year : ", obj);
