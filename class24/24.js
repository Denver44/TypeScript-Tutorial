console.log("we are on tut 24");

// JAVASCRIPT HAS A INBUILT FUNCTION FOR THE TIME AND DATE THE FUNCTION IS Date()
let today = new Date();
console.log(today);
console.log (typeof today); // it is object datatype as we know

// to create other date

let otherdate = new Date("06-24-2020") // use new keyword to create a date object and then write the date in strinf format
otherdate = new Date("June 24 2020")  // MM-DD-YYYY
otherdate = new Date("06/24/2020")
//  otherdate = new Date("06-24-2020")
// console.log(otherdate);

let a = otherdate.getDay();
a = otherdate.getDate();
a = otherdate.getMinutes();
a = otherdate.getMonth();
a = otherdate.getMilliseconds();
console.log(a);
a = otherdate.setDate(4)
a = otherdate.setMonth(3)
a = otherdate.setFullYear(1999)
a = otherdate.setMinutes(15);
a = otherdate.setHours(9);

console.log(otherdate);