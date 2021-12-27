"use strict";
var names = ["Denver-City", "Tokyo"];
console.log(names[0].split("-"));
// This is generic type but it is inbuilt.
// Array<string> it is same as string[]
var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("I am resolve");
    }, 2000);
});
promise.then(function (data) {
    console.log(data);
});
// Most we used at time of promise to tell that our return type will be particular of this datatype.
