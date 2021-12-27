let arr2: number[] = [100, 105, 5555, 666];
let arr = ['A1', 'B1', ...arr2];

arr.map((e) => console.log(e));

const person = {
  name: 'MAX',
  age: '20',
};

// So here we will have the person all details with that we added person2 detail
const person2 = {
  ...person,
  city: 'utah',
};

console.log(person);
console.log(person2);

const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addedNumber = add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log('Add 1 to 10 Numbers', addedNumber);

const addTuple = (...numbers: [number, number, number]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 60);
};

const addedNumber2 = addTuple(1, 2, 3);
console.log(addedNumber2);

const [num1, num2, ...num] = arr2;

console.log(arr2, num1, num2, num);

const { city: hometown, age } = person2;
console.log(hometown);
console.log(age);
