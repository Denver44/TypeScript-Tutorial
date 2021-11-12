"use strict";
function merger(a, b) {
    return Object.assign(a, b);
}
const mergedObj = merger({ name: "Denver", age: "30" }, 5);
console.log(mergedObj);
// This problem is solve as we have put constarint here that the type of T and U will be Object.
function merger1(a, b) {
    return Object.assign(a, b);
}
const mergedObj1 = merger1({ name: "Denver", age: "30" }, { city: "Vadodara" });
console.log(mergedObj1);
function countAndDescribe(element) {
    let descriptionText = "Got no value";
    if (element.length === 1) {
        descriptionText = "Got 1 Element";
    }
    else if (element.length > 1) {
        descriptionText = "Got " + element.length + " elements";
    }
    return [element, descriptionText];
}
console.log(countAndDescribe(["30", "40"]));
console.log(countAndDescribe("DENVER"));
// ---------------- KEYOF ------------------
function extractAndConvert(obj, key) {
    return "value " + obj[key];
}
console.log(extractAndConvert({ name: "TUPAC" }, "name"));
