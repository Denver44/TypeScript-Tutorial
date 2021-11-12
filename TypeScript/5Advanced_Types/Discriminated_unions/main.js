"use strict";
// Here we have used type in each interfaces to discriminate the union.
function moveAnimal(animal) {
    var speed;
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
var a = moveAnimal({ type: "Bird", flyingSpeed: 110 });
console.log(a);
// This is another way of typeGuard.
