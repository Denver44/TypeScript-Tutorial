"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function Log(constructor, propertyName) {
    console.log("Property decorator.....");
    console.log(constructor);
    console.log(propertyName);
}
function Log2(constructor, name, descriptor) {
    console.log("Accessor decorator.......................");
    console.log(constructor);
    console.log(name);
    console.log(descriptor);
}
function Log3(constructor, name, descriptor) {
    console.log("Method decorator.......................");
    console.log(constructor);
    console.log(name);
    console.log(descriptor);
}
function Log4(constructor, name, position) {
    console.log("Parameter decorator.......................");
    console.log(constructor);
    console.log(name);
    console.log(position);
}
class Product {
    constructor(title, price) {
        this.title = title;
        this._price = price;
    }
    set price(val) {
        if (val > 0)
            this._price = val;
    }
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    Log
], Product.prototype, "title", void 0);
__decorate([
    Log2
], Product.prototype, "price", null);
__decorate([
    Log3,
    __param(0, Log4)
], Product.prototype, "getPriceWithTax", null);
// We can add decorator to property and it will get two argument one is constructor and another is property name
// This are all the place we can add decorators
