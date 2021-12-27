"use strict";
// It is not a class it just how our object will look like.  It only describe our object . WE cannot declare a value here throws error.  The Idea behind this is to typeCheck our obj.
var user1 = {
    name: "Max",
    age: 5,
    greet: function (phrase) {
        console.log(phrase + " " + this.name);
    },
};
user1.name = "min";
user1.greet("Good Morning");
// we can add many interfaces by putting comma
var class1 = /** @class */ (function () {
    function class1(n) {
        this.name = n;
    }
    class1.prototype.greet = function (text) {
        console.log("Hi Mr. ", this.name, " have a ", text);
    };
    return class1;
}());
var obj1 = new class1("MAX");
obj1.greet("nice day");
var ob1;
ob1 = {
    name: "Max",
};
var obj12;
obj12 = {
    name: "MAX",
    age: 25,
};
var addFun = function (a, b) {
    return a + b;
};
console.log(addFun(88, 12));
var a = {
    name: "DENVER44",
    age: 55,
};
var b = {
    name: "TOKYO55",
    // age: 55,
};
console.log(a);
console.log(b);
