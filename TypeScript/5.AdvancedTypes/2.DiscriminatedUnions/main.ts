interface Bird {
  type: "Bird";
  flyingSpeed: number;
}
interface Horse {
  type: "Horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;
// Here we have used type in each interfaces to discriminate the union.

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "Bird":
      speed = animal.flyingSpeed;
      break;
    case "Horse":
      speed = animal.runningSpeed;
      break;
  }
  return speed;
}

let a = moveAnimal({ type: "Bird", flyingSpeed: 110 });
console.log(a);

// This is another way of typeGuard.
