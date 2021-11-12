// Decorate which is written first it will execute
// In Actual Decorators execute from bottom to top.

function Logger(constructor: Function) {
  console.log("logging.....");
  console.log(constructor);
}

function WithTemplate(template: string, hookId: string) {
  return function (constructor: any) {
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      const hookEll = (document.querySelector("p")!.textContent = p.name);
    }
  };
}

@Logger
@WithTemplate("<h1>Hello </h1>", "app")
class Person {
  name = "Max";
  constructor() {
    console.log("Creating person object.....");
  }
}
