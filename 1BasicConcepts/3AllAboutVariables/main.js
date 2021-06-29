/* 
Variable in JS

1. var  -> the var is very old we use in the old javascript. 
2. let -> In modern days we mostly use let and const and let is a scape defined variable.
3. const -> This make the variable const so u cannot redefined it but u can add elements on it. but u cannot change a element value after its declaration.
*/

/* Most common programming case types:

1. camelCase
2. kebab-case
3. snake_case
4. PascalCase

*/
// RULES FOR CREATING JAVASCRIPT VARIABLES

/*
1. Cannot start  with numbers
2. can start with letters , numbers, _ or $ note use $ in object oriented programming part for declaring the private variable.
3.  Are Case Sensitive.
*/

var name = "denver"; // we can write string in single Quote.
var name2 = "denver"; // we can write string in Double Quote.
var name3 = `d"e"denver`; // we can write string in backtick in modern days use mostly backtick.
console.log(name, name2, name3);

var $city = "delhi";

$city = "DenverCity";

var _city2 = "NewYork";

console.log($city, _city2);

// CONST

const ownersName = "HariOm";
// ownersName= "Hari hari "  // this i cant do because ownersName is const so no re definition.
console.log(ownersName);

// LET

{
  let name = "Adonis";
  console.log(name);
  // only applicable in a defined scope.
}
// console.log(name);

const arr1 = [1, 2, 3, 4];
console.log(arr1);
arr1.push(5);
console.log(arr1);
arr1.pop();
arr1.pop();
console.log(arr1);
