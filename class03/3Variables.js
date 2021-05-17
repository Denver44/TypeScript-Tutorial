console.log('Hello World');

/* 
**********************Variable in Javascripts*********************

 1. var  -> the var is very old we use in the old javascript. 
 2. let -> In mordern days we mostlu use let and const and let is a scaope defined variable.
 3. const -> This make the variable const so u acnnot redefined it but u can add elements on it but u cannot change a elemnt value after its declartion.
*/

//************RULES FOR CREATING JAVASCRIPT VARIABLES**********//

/*
1. Cannot start  with numbers
2. can start with letters , numbers, _ or $
 note use $ in object oriented programming part for decalring the proivate variable.
 3.  Are Case Sensitive.

*/
var name = 'durgesh'; // we can write string in single Quote.
var name2 = "Vishal";// we can write string in Double Quote.
var name3 = `G"e"eta`;// we can write string in backtick in morden days use mostly backtick.
console.log(name, name2, name3);
var $city = "delhi";
$city = "vadodara";
var _city2 = "Newyork";
console.log($city, _city2);

//*************************CONST ***************************//

const ownersName = "Hari Om";
// ownersName= "Hari hari "  // this i cant do beacuse ownersName is const so no re definition.
console.log(ownersName);



//*************************LET ***************************//

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


/* Most common programming case types:

1. camelCase
2. kebab-case
3. snake_case
4. PascalCase


*/