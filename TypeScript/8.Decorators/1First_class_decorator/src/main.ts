// Decorator receive arguments and its depend how many it receive it .
// in class they mainly get the constructor which is a function type.
function Logger(target: Function) {
  console.log("LOGGING FUNCTION.........");
  console.log(target);
}

@Logger
class Person {
  name = "Max";
  constructor() {
    console.log("Creating person object.....");
  }
}

let p1 = new Person();
console.log(p1);
