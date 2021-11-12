function combine(input1: number | string, input2: number | string) {
  if (typeof input1 === "number" && typeof input2 === "number") {
    return input1 + input2;
  } else {
    return input1.toString() + input2.toString();
  }
}

console.log(combine(5, 66));
console.log(combine(55, 66));
console.log(combine("DENVER", " MARIA"));
console.log(combine("RIO ", "TOKYO"));

// TO use Union type using pipe Symbol.
// We can give as many type by using (|)
