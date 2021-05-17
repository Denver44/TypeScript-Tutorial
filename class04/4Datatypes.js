//**************************PRIMITIVE DATATYPES******************************//


// string

let name = "Durgesh";
console.log(name);
console.log("my name is " + name); // two concatinate string use +
console.log((typeof name));


// Numbers

let marks = 34;
console.log(marks);
console.log((typeof marks));
console.log(`See below here`);
console.log(typeof(marks));


// Boolean

let isDriver = true;
console.log(isDriver);
console.log((typeof isDriver));


// NULL

let nullvar = null;
console.log(nullvar);
console.log((typeof nullvar));


// UNDEFINED
let undef = undefined;
console.log(undef);
console.log((typeof undef));


//************************************** RFERENCE DATA TYPES 

// ARRAY/

let myarr = [1, 2, 3, 4, "durgesh", true];
console.log(myarr);
console.log((typeof myarr));

// OBJECT LITERALS  Like Maps in c++

let marks2 = {
    durgesh: 40,
    neeraj: 99,
    harshil: 85
};
console.log(marks2);
console.log((typeof marks2));

// FUNCTION 

function myfunc1(params) {

}
console.log((typeof myfunc1));


// DATE TYPE

let date = new Date();
console.log(typeof date);

// The functions date object and array memmory store in heap.