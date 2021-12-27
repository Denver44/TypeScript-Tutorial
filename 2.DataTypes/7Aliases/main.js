function combine(input1, input2, resultConversion) {
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultConversion === "as-number") {
        return +input1 + +input2;
    }
    else {
        return input1.toString() + input2.toString();
    }
}
console.log(combine(5, 6, "as-number"));
console.log(combine("RIO ", "TOKYO", "as-text"));
var u1 = { name: "Denver", age: 22 };
console.log(u1);
function greet(User) {
    console.log("GM ", User.name);
}
greet(u1);
var a;
a = 55;
console.log(a);
console.log(typeof a);
