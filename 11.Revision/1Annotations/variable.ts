let totalBike: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in Objects
let now: Date = new Date();

// Arrays
let Colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [5, 6, 7];
let truths: boolean[] = [true, false, true];

//Classes

class Car {}

let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
const logNumber: (number, string) => void = (i: number, j: string) => {
  console.log(i, j);
};

// 1) When To use Annotations

const json = '{"x" : 10, "y":20}';
const co_ordinates: { x: number; y: number } = JSON.parse(json);
console.log(co_ordinates.x, co_ordinates.y);

// 2) When we Declare a variable on one line and Initialize it late

let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') foundWord = true;
}

// 3) Variable whose type cannot be inferred correctly using pipe symbol we can set more types to one variables.

let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) numberAboveZero = numbers[i];
}
