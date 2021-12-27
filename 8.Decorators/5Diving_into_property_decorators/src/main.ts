function Log(constructor: Function, propertyName: String | Symbol) {
  console.log("Property decorator.....");
  console.log(constructor);
  console.log(propertyName);
}
function Log2(
  constructor: Function,
  name: string,
  descriptor: PropertyDescriptor
) {
  console.log("Accessor decorator.......................");
  console.log(constructor);
  console.log(name);
  console.log(descriptor);
}
function Log3(
  constructor: Function,
  name: string,
  descriptor: PropertyDescriptor
) {
  console.log("Method decorator.......................");
  console.log(constructor);
  console.log(name);
  console.log(descriptor);
}
function Log4(constructor: Function, name: string, position: number) {
  console.log("Parameter decorator.......................");
  console.log(constructor);
  console.log(name);
  console.log(position);
}

class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
  set price(val: number) {
    if (val > 0) this._price = val;
  }
  constructor(title: string, price: number) {
    this.title = title;
    this._price = price;
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

// We can add decorator to property and it will get two argument one is constructor and another is property name


// This are all the place we can add decorators