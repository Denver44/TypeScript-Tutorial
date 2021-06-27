//  TYPE CONVERSION

//  int to string  using String()
let myVar = 56;
console.log(myVar, typeof myVar, myVar);
myVar2 = String(80);
console.log(myVar, typeof myVar);

//  BOOL TO STRING
let booleanVar = String(true);
console.log(booleanVar, typeof booleanVar);

// Date() TO STRING

let date2 = new Date();
console.log(date2, typeof date2);

let date = String(new Date());
console.log(date, typeof date);

//  ARRAY TO STRING

// let arr = [1, 2, 3, 4, 5, 6];
// console.log(arr.length, (typeof arr));

let arr = String([1, 2, 3, 4, 5, 6]);
console.log(arr.length, typeof arr);

let i = 75;
console.log(i.toString());

let str = Number("3434");
let str = Number(true);
let str = Number("34d34"); // NAN not a number
console.log(str, typeof str);

let number = parseFloat("34.098");
let number = parseInt("34.098");
console.log(number.toFixed(2), typeof number);

//  TYPE COERCION

let myStr = "698",
  myNum = 34;
let a = 1,
  b = 2;

console.log(a + b + myStr + myNum); // here the associativity rule is applied as first a+b is added then it added as string to myStr and total of that is again added to myNum

console.log(myNum + myStr); // here the associativity rule is applied as first a+b is added then it added as string to myStr and total of that is again added to myNum
