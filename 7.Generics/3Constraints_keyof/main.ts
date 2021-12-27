function merger<T, U>(a: T, b: U) {
  return Object.assign(a, b);
}

const mergedObj = merger({ name: "Denver", age: "30" }, 5);
console.log(mergedObj);

// This problem is solve as we have put constarint here that the type of T and U will be Object.

function merger1<T extends object, U extends object>(a: T, b: U) {
  return Object.assign(a, b);
}

const mergedObj1 = merger1({ name: "Denver", age: "30" }, { city: "Vadodara" });
console.log(mergedObj1);

// ----------- ANOTHER GENERIC FUNCTIONS------------------

interface Lengthy {
  length: number;
}
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value";
  if (element.length === 1) {
    descriptionText = "Got 1 Element";
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + " elements";
  }

  return [element, descriptionText];
}

console.log(countAndDescribe(["30", "40"]));
console.log(countAndDescribe("DENVER"));

// ---------------- KEYOF ------------------

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "value " + obj[key];
}

console.log(extractAndConvert({ name: "TUPAC" }, "name"));
