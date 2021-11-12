type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) {
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    return +input1 + +input2;
  } else {
    return input1.toString() + input2.toString();
  }
}

console.log(combine(5, 6, "as-number"));
console.log(combine("RIO ", "TOKYO", "as-text"));

//  TYPES of ALIASES

// EXAMPLE 1

type num = number;

let a: num;
a = 55;
console.log(a);
console.log(typeof a);

// EXAMPLE 2 OBJECT TYPES

type user = { name: string; age: number };
const u1: user = { name: "Denver", age: 22 };
console.log(u1);

function greet(User: user) {
  console.log("GM ", User.name);
}

greet(u1);
