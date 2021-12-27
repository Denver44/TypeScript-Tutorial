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
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    Vehicle.prototype.honk = function () {
        return 'beep beep';
    };
    Vehicle.prototype.brokenState = function () {
        console.log('No broken');
    };
    return Vehicle;
}());
var FourWheelerCar = /** @class */ (function (_super) {
    __extends(FourWheelerCar, _super);
    function FourWheelerCar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FourWheelerCar.prototype.drive = function () {
        return 'speed speed';
    };
    FourWheelerCar.prototype.color = function (color) {
        console.log('The color of Car is ', color);
    };
    FourWheelerCar.prototype.drivingProcess = function () {
        console.log('start your driving at ', this.drive(), ' pace');
    };
    FourWheelerCar.prototype.shouldIHonk = function () {
        console.log('I can Honk ', this.honk());
    };
    return FourWheelerCar;
}(Vehicle));
// Instances of our class
var vehicle = new Vehicle();
// vehicle.honk(); // Not accessible as it is protected
vehicle.brokenState();
var firstCar = new FourWheelerCar();
// firstCar.drive(); // not accessible as private
firstCar.drivingProcess();
firstCar.shouldIHonk();
firstCar.color('black');
