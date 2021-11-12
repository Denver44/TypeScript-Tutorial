function merger<T, U>(a: T, b: U) {
  return Object.assign(a, b);
}

console.log(merger({ name: "Denver" }, { age: "30" }));

const mergedObj = merger({ name: "Denver" }, ["30", "44", "66"]);

// const mergedObj = merger<{name: string} , string[]>({ name: "Denver" }, ["30", "44", "66"]); // We can also specify this way but this redundant.

const mergedObj1 = merger(
  { name: "Denver", hobbies: ["sports", "reading"] },
  { age: "30" }
);

console.log(mergedObj);
console.log(mergedObj.name);
console.log(mergedObj1);
