//------- This is how we write a fucntion ------//
function greeting(val) {

    console.log(val);
}
greeting("Hello Everyone Good moring");

// ----------2nd method --------------------//

let greet = function () {

    console.log("hello Durgesh");
}

greet();


//------------- 3rd Method Arrow Function -------//

let greet2 = (value) => {
    console.log(value);
}
greet2("hello Vishal");

// No need to write to return or function keyword just the =>

let sum = (a, b) => a + b;
console.log(sum(10, 20));

//************* TO return object is use ()  */

// If one args then need to put the brackets  but if more than one args u need to put the args.

const z = name2 => ({
    name: name2
})
console.log(z("durgesh"));