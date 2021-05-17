console.log("We are on tut9");

// General Loops:
//1. for
//2. while
//3. do-while

//*********FOR LOOP **********// 
// for (let i = 0; i < 100; i++) {
//     console.log(i);
// }
//**********WHILE LOOP*********// 
// let j = 0;
// while (j < 10) {
//   console.log(j);
//   j++;
// }
//***********DO WHILE LOOP*******// 
// let k = 0;
// do {
//     if (k === 5) {
//         k++; 
//         continue; // this is for skip that part.
//     }
//     console.log(k);
//     k++;
// } while (k < 10);

// let arr = [2, 5, 6, 4, 2, 3];

//********** OLD METHOD TO PRINT THE LOOP ELEMENTS */
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     console.log(element);
// }

//****** FOREACH FUNCTION NEW METHOD TO PRINT THE ARRAY ELEMENT****//

// arr.forEach(function(element, index, array){
//     console.log(element, index, array);
// });

// let obj = {
//     name: "Rohan Das",
//     age: 78,
//     type: "Dangerous Programmer",
//     os: "Ubuntu"
// }
// //******** TO PRINT THE OBJECT ELEMENT ***********//
// for (let key in obj) {
//     console.log(`The ${key} of object is ${obj[key]}`)
// }

// console.log('done');

let res = 0;
for (let index = 1; index <= 10; index++) {

    res = 6 * index;
    let a = "<h5>" + "6 X " + index + "=" + res + " " + "</h5>";
    document.write(a);

}

document.write("<h1> Fibonacci seqience </h1>")

let oldterm = 0;
let newterm = 1;
let newsterm = 0;
let i = 1;
document.write("<h5>" + oldterm + "</h5>");
document.write("<h5>" + newterm + "</h5>");

while (i != 10) {
    newsterm = oldterm + newterm;
    document.write("<h5>" + newsterm + "</h5>");
    oldterm = newterm;
    newterm = newsterm;
    i++;

}

let arr = ["dugresh", "vishal", 5, 8, 7];

arr.forEach(function (elemnet, index, array) {
    console.log(elemnet, index, array)
});