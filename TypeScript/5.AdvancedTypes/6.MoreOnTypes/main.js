"use strict";
var e1 = {
    name: "Max",
    privileges: ["root-user"],
    startDate: new Date(),
};
console.log(e1);
var e2 = {
    name: "Min",
    privileges: ["sudo-user"],
    startDate: new Date(),
};
console.log(e2);
// Adding TypeGuard
function add(a, b) {
    // Here this if condition works as a typeGuard.
    if (typeof a === "string" || typeof b === "string")
        return a.toString() + b.toString();
    return a + b;
}
function printEmployee(emp) {
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
var e3 = {
    name: "Maximum",
    privileges: ["root-user1"],
};
printEmployee(e3);
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log("Driving.....");
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log("Driving.....Truck");
    };
    Truck.prototype.LoadCargo = function (amount) {
        console.log("Driving.....LoadCargo of ", amount);
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck)
        vehicle.LoadCargo(100);
}
useVehicle(v1);
useVehicle(v2);
