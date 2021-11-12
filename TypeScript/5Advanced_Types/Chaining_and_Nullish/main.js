"use strict";
var _a;
var fetchData = {
    id: "ul",
    name: "Max",
    job: { title: "CEO", dex: "My own company" },
};
// THis is called optional chaining
console.log((_a = fetchData === null || fetchData === void 0 ? void 0 : fetchData.job) === null || _a === void 0 ? void 0 : _a.title);
// ---------- NULLISH ------------
var userInput = undefined;
var storedData = userInput !== null && userInput !== void 0 ? userInput : "Default";
console.log(storedData);
var userInput1 = "";
var storedData1 = userInput1 !== null && userInput1 !== void 0 ? userInput1 : "Default";
console.log(storedData1);
