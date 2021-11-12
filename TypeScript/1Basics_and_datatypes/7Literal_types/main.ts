// Note: Literal Types are nothing just defining clearly that this will be our return type.
function combine(
  input1: number | string,
  input2: number | string,
  resultConversion: "as-number" | "as-text"
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

console.log(combine(5, 66, "as-number"));
console.log(combine("55", "55", "as-number"));
console.log(combine("RIO ", "TOKYO", "as-text"));
