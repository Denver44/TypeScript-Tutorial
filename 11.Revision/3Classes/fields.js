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
    //    or
    // color: string;
    // constructor(color: string) {
    //   this.color = color;
    // }
    //     or (ShortHand)
    function Vehicle(color) {
        this.color = color;
        this.wheels = 4;
    }
    // constructor(public engine: string) {}
    // constructor(protected glassType: string) {}
    // constructor(private carMode: string) {}
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
    function FourWheelerCar(fuelType, color) {
        var _this = _super.call(this, color) || this;
        _this.fuelType = fuelType;
        return _this;
    }
    FourWheelerCar.prototype.drive = function () {
        return 'speed speed';
    };
    FourWheelerCar.prototype.drivingProcess = function () {
        console.log('start your driving at ', this.drive(), ' pace');
    };
    FourWheelerCar.prototype.shouldIHonk = function () {
        console.log('I can Honk ', this.honk());
    };
    return FourWheelerCar;
}(Vehicle));
var vehicle = new FourWheelerCar('petrol', 'yellow');
vehicle.brokenState();
console.log(vehicle.color);
console.log(vehicle.fuelType);
console.log(vehicle.wheels);
vehicle.drivingProcess();
vehicle.shouldIHonk();
