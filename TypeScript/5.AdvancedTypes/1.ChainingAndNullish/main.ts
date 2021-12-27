const fetchData = {
  id: "ul",
  name: "Max",
  job: { title: "CEO", dex: "My own company" },
};
// THis is called optional chaining
console.log(fetchData?.job?.title);

// ---------- NULLISH ------------

const userInput = undefined;
const storedData = userInput ?? "Default";

console.log(storedData);

const userInput1 = "";
const storedData1 = userInput1 ?? "Default";

console.log(storedData1);
