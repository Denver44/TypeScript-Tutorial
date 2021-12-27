function WithTemplate(template: string, hookId: string) {
  console.log("RENDERING WITH TEMPLATE.........");
  return function (constructor: any) {
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      const hookEll = (document.querySelector("h2")!.textContent = p.name);
    }
  };
}

@WithTemplate("<h1>SRK KING KHAN </h1>", "app")
class Person {
  name = "Max";
  constructor() {
    console.log("Creating person object.....");
  }
}

const p1 = new Person();
console.log(p1);
