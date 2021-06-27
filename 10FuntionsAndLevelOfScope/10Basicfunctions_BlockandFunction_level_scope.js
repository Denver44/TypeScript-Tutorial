// VARIABLE SCOPE CONCEPT

// Var has A Function Level Scope.
// LET and CONST are Block Level Scope

var a = 235;
console.log(" the total is " + a);

{
  const i = 5;
  console.log(" the total is " + i); // local
  console.log("the total is " + a); // global
}

console.log("the total is " + a);
// console.log("the total is " + i); // as  i destroy as the bracket finished.

//  FUNCTION LEVEL VS BLOCK LEVEL
// function name(a) {
//   if (true) {
//     let c = "Ram";
//     console.log(c + a);
//   }
//   console.log(c + a);
// }

function name(a) {
  if (true) {
    var c = "Ram";
    console.log(c + a);
  }
  console.log(c + a);
}

name(" Mandir");

//  FUNCTIONS

// let name = "Denver";
// let name2 = "Rio";

// console.log(`Happy birthday to ${name} who is smart,Handsome,funny &
//  reminds me a lot of myself..!`)

//  FUNCTION DEFINITION NO NEED TO WRITE DATA TYPES

// function greeting(people, blessing = "always be happy") {

//  console.log(`Happy birthday to ${people} who is smart,gorgeous,funny & reminds me a lot of myself… from one fabulous chick to another! ${blessing}`)
//     let msg = `Happy birthday to ${people} who is smart,funny &reminds me a lot of myself…from one fabulous chick to another! ${blessing}`;
//     return msg;

// }
// let val = greeting(name, 'Allah bless u')
// console.log(val)
// console.log(greeting(name2))

// IN A OBJECT WE CAN CREATE FUNCTION AND THERE IS NO NEED TO WRITE A FUNCTION NAME.

// const obj = {

//     name: "denver",
//     game: function () {
//         return "GTA";

//     }
// }

// console.log(obj.game());

//  ARRAY FUNCTION

// By using the.forEach function also we can print the elements of the array.
// arr = ["Fruit", "Vegetable", "Furniture"];

// arr.forEach(function (element,index) {
//     console.log(element,index);
// });

// FUNCTIONS
// function addName(x, y) {
//     let a = x;
//     let b = y;
//     document.write("<> the total is " + (a + b) + "</>");

// }
// addName(2, 56);
