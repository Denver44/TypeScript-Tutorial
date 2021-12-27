// It is not a class it just how our object will look like.  It only describe our object . WE cannot declare a value here throws error.  The Idea behind this is to typeCheck our obj.

interface Person {
  name: string;
  age: number;
  greet(phrase: string): void;
}

let user1: Person = {
  name: "Max",
  age: 5,
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  },
};
user1.name = "min";
user1.greet("Good Morning");

// ----------------------------------- INTERFACE IMPLEMENTATIONS ON CLASS --------------------

interface greetable {
  name: string;
  greet(phrase: string): void;
}

// we can add many interfaces by putting comma

class class1 implements greetable {
  name: string;
  constructor(n: string) {
    this.name = n;
  }
  greet(text: string) {
    console.log("Hi Mr. ", this.name, " have a ", text);
  }
}

let obj1 = new class1("MAX");
obj1.greet("nice day");

// ------------------------ make variable readonly ------------
// we cannot add private, public, protected only readonly can be added
interface Person1 {
  readonly name: string;
}
let ob1: Person1;
ob1 = {
  name: "Max",
};

// ob1.name = "Min"; // See here we can't change now.

// ------------------------- INTERFACE INHERITANCE ---------------

interface Named {
  name: string;
}

interface Detail extends Named {
  age: number;
}

let obj12: Detail;
obj12 = {
  name: "MAX",
  age: 25,
};

// ---------------------- INTERFACE AS FUNCTION TYPES -------------------

interface addFun {
  (a: number, b: number): number;
}

let addFun = (a: number, b: number) => {
  return a + b;
};
console.log(addFun(88, 12));
// ----------------------- OPTIONAL PARAMETERS ----------------

interface User {
  name: string;
  age?: number; // By putting (?) we can make it optional
}

const a: User = {
  name: "DENVER44",
  age: 55,
};
const b: User = {
  name: "TOKYO55",
  // age: 55,
};

console.log(a);
console.log(b);
