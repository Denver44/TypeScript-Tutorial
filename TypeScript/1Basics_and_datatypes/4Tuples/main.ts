let obj: {
  name: string;
  age: number;
  hobbies: string[];
  role: [string, number]; // TUPLE
} = {
  name: "Denver",
  age: 22,
  hobbies: ["cricket", "calisthenics"],
  role: ["ACTION", 2],
};

//  Accessing Tuple Elements
// We can access tuple elements using index, the same way as an array. An index starts from zero.

obj.role[0] = "COMEDY";
obj.role[1] = 5;

// Add Elements into Tuple
// You can add new elements to a tuple using the push() method.
obj.role.push(5);

// Now,role cannot take more than two values & the first element must be string,Second element must be a number.
// obj.role = ["romance", 5, "gg"]; We cannot assign more than two as we already define it above.
// obj.role = ["romance", 5]; #This is perfect

console.log(obj);
console.log("The type of my object is ", typeof obj.role);

let employee: [number, string] = [1, "Steve"];

// A tuple type variable can include multiple data types as shown below.
let person: [number, string, boolean] = [1, "Steve", true];

let user: [number, string, boolean, number, string]; // declare tuple variable
user = [1, "Steve", true, 20, "Admin"]; // initialize tuple variable

console.log(employee);
console.log(person);
console.log(user);

// IMPORTANT You can declare an array of tuple also.
var employee2: [number, string][];
employee2 = [
  [1, "Steve"],
  [2, "Bill"],
  [3, "Jeff"],
];

console.log(employee2);
