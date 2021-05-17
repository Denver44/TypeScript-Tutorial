//************* TYPE CONVERSION************//

console.log("Welcome to tut5");


//**** INT TO STRING CONVERSION USING String() */
let myvar = 56;
console.log(myvar, (typeof myvar) , myvar);
myvar2 = String(80)
console.log(myvar2, (typeof myvar2));

//**** BOOL TO STRING CONVERSION **//
let booleanvar = String(true);
console.log(booleanvar, (typeof booleanvar));


//**** Date() TO STRING CONVERSION **//

let date2 = (new Date());
console.log(date2, (typeof date2));

let date = String(new Date());
console.log(date, (typeof date));


//***** ARRAY TO STRING  */
// let arr = [1, 2, 3, 4, 5, 6];
// console.log(arr.length, (typeof arr));


let arr = String([1, 2, 3, 4, 5, 6]);
console.log(arr.length, (typeof arr));

let i = 75;
console.log(i.toString());


// let stri = Number("3434");
let stri = Number(true);
// let stri = Number("34d34"); // NAN not a number
console.log(stri, typeof (stri));

// let number = parseFloat('34.098');
let number = parseInt('34.098');
console.log(number.toFixed(2), (typeof number));



//************ TYPE COERCION **************// 

let mystr = "698";
let mynum = 34;
let a = 1;
let b = 2;
console.log(a+b+mystr + mynum); // here the asociativity rule is applied as first a+b is added then it added as string to mystr and total of that is again added to mynum
console.log(mynum + mystr); // here the asociativity rule is applied as first a+b is added then it added as string to mystr and total of that is again added to mynum

