const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};
// This is a tuple now it will always first string then boolean and the a number
// That's different of array and tuples
const pepsi: [string, boolean, number] = ['brown', true, 40];

// Creating a alias
type Drink = [string, boolean, number];

const coke: Drink = ['black', true, 40];
const tea: Drink = ['brown', false, 5];
