let obj = {
  name: "Denver",
  age: 22,
  hobbies: ["cricket", "calisthenics"],
};
console.log(obj);

// Note :- string[] means Arrays of string

let fav; //Note:-  As at time of declaration the dataType is not mention so by default it will be any so it will not throw if we change from string[] to number.
fav = 55;
fav = ["Denver", "Tokyo", "Rio", 1];

console.log(fav);

fav.map((e) => {
  if (typeof e === "string")
    console.log(e.toUpperCase() + " Money heist Character");
});

let fav4: any[]; //Note:-  As we want mix array so we explicity type (any[])
fav4 = ["Denver", "Tokyo", "Rio", 1];
console.log(fav4);

//  IMPORTANT THROWS ERROR

// let arr1 = ["Denver", "Tokyo", "Rio"]; //Note:- Here the arr1 get the type of string array then we change it to number so it will throw the error
// arr1 = 55; //NOTE:- This will throw error as arr1 is string[]
// console.log(arr1);

// let fav3: string[]; // NOTE:-  Here only the array of string is possible not the array of the number or any
// fav3 = ["Denver", "Tokyo", "Rio", 1];
// console.log(fav3);
