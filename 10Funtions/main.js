let name = "Denver";
let name2 = "Rio";

console.log(
  `Happy birthday to ${name} who is smart,Handsome,funny & reminds me a lot of myself..!`
);

//  NOTE:- FUNCTION DEFINITION NO NEED TO WRITE DATA TYPES

function greeting(people, blessing = "always be happy") {
  console.log(
    `Happy birthday to ${people} who is smart,gorgeous,funny & reminds me a lot of myself… from one fabulous chick to another! ${blessing}`
  );
  let msg = `Happy birthday to ${people} who is smart,funny &reminds me a lot of myself…from one fabulous chick to another! ${blessing}`;
  return msg;
}

let val = greeting(name, "Allah bless u");
console.log(val);
console.log(greeting(name2));

//  NOTE:- IN A OBJECT WE CAN CREATE FUNCTION AND THERE IS NO NEED TO WRITE A FUNCTION NAME.

const obj = {
  name: "denver",
  game: function () {
    return "GTA";
  },
};

console.log(obj.game());

FUNCTIONS;
function addName(x, y) {
  let a = x,
    b = y;
  document.write("<> the total is " + (a + b) + "</>");
}

addName(2, 56);
