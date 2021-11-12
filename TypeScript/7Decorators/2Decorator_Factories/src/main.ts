function Logger(logString: string) {
  console.log("Logging......", logString);
  return function (constructor: Function) {
    console.log(constructor);
  };
}

@Logger("KING")
class Person {
  name = "Max";
  constructor() {
    console.log("Creating person object.....");
  }
}

const p1 = new Person();
console.log(p1);

// No here the decorator return function so we have to call like @logger() and we can pass our value also.
// Using decorators factories we can give more power to our decorators.
