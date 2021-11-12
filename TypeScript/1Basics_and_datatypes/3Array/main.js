// string[] means Arrays of string
var obj = {
    name: "Denver",
    age: 22,
    hobbies: ["cricket", "calisthenics"]
};
console.log(obj);
var fav; // as at time of declartion the dataype is any so it will not throw if we change from string[] to number.
fav = 55;
fav = ["Denver", "Tokyo", "Rio", 1];
console.log(fav);
fav.map(function (e) {
    if (typeof e === "string")
        console.log(e.toUpperCase() + " Money heist Character");
});
// As we want mix array so we explicity type (any[])
var fav4;
fav4 = ["Denver", "Tokyo", "Rio", 1];
console.log(fav4);
// -------- THROWS ERROR -----------------
// here the fav1 get the type of string array then we change it to number so it will throw the error
// let fav1 = ["Denver", "Tokyo", "Rio"];
// fav1 = 55; //This will throw error as fav1 is string[]
// console.log(fav1);
// Here only the array of string is possible not the array of the string
// let fav3: string[];
// fav3 = ["Denver", "Tokyo", "Rio", 1];
// console.log(fav3);
