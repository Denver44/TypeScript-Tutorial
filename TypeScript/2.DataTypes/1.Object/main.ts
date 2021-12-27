// This is better syntax to make obj.
let obj = {
  name: "Denver",
  age: 22,
};
console.log(obj);

// This is not optimal
let obj1: {
  name: string;
  age: number;
} = {
  name: "Denver",
  age: 22,
};
console.log(obj1);

// let obj2: {
//   name: string;
//   age: 30; //this will thro error as we mention the age 30 constant here.
// } = {
//   name: "Denver",
//   age : 22,
// };
// console.log(obj2);
