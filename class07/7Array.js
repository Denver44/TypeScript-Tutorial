console.log("We are at Tut 7  Topic Array");

let marks = [34, 23, 24, 93, 73, 25];
// let fruits = ["Orange", "Apple", "Pineapple"];
// let mixed = [100, 500, "Knock knock", [5, 2]];
// let value = marks.indexOf(73);
// marks.push(5);
// document.write("<h3>" + marks + "</h3>")
// document.write("<h3>" + fruits + "</h3>")
// document.write("<h3>" + mixed[3][1] + "</h3>")

let arr = new Array("Durgesh", "vihsal", "seocndarr", "2one"); // A must be Upper in this it define that it will going to store an array inside.
marks[0] = 56;
// console.log(marks);
// console.log(fruits);
// console.log(mixed[2]);
// console.log(mixed[3][1]);
// console.log(mixed[3][0]);
// console.log(arr);
// console.log("Index of function ", value);

// console.log("The length of Array fruit is ", fruits.length);
// console.log("The length of Array fruit is ", mixed.length);
// console.log("Is a Array function ", Array.isArray(mixed)); // it will tell that is tis array or not.
// console.log("Is a Array function ", Array.isArray(abcd));

// Mutating or Modifying Arrays
// marks.push(100); // at back insertion
// marks.unshift(100); // at top insertion
// marks.pop(); // remove at back
// marks.shift(); // remove from top
// console.log(marks.splice(0, 3)); // start from 0 and endswith 2
// console.log(marks.reverse()); // start from 0 and endswith 2
// marks.reverse();
// let marks2 = [34, 23, 24];
// marks = marks.concat(marks2);
// console.log(marks);

// -------------------Old Traditon For Loop
// for (let i = 0; i < marks.length; i++) {
//   console.log(marks[i]);
// }
// ------- Foreach for Traversal of Array--------------
// The For each loop take as function as argument and in function it takes three agrument element index and array itslef.
let arr2 = ["php", "python", "Django", "Javascript"];
arr2.forEach((element, index) => {
  console.log("i am the new array " + element + " at positon " + index);
});

//----------- array.map(function(currentvalue,index,arr),thisvalue)
arr.map((element) => console.log(element));

//**************We can also access object like below *************************//

let myobj = {
  name: "Durgesh",
  Channel: "CodeWithme",
  isActive: true,
  marks3: [1, 2, 3, 4, 5],
};

// console.log(myobj);
// console.log(myobj.name);
// console.log(myobj.Channel);
// console.log(myobj.isActive); // 1st way to acess the key of object
// console.log(myobj.marks3);
// console.log(myobj.marks3[0]);
// console.log(myobj.marks3[1]);
// console.log(myobj['isActive']); // 2nd way
