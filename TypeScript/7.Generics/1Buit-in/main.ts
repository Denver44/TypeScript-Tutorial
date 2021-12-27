const names: Array<string> = ["Denver-City", "Tokyo"];
console.log(names[0].split("-"));

// This is generic type but it is inbuilt.
// Array<string> it is same as string[]

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("I am resolve");
  }, 2000);
});

promise.then((data) => {
  console.log(data);
});

// Most we used at time of promise to tell that our return type will be particular of this datatype.
