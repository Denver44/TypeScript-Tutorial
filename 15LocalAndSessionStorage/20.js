// //************* LOCAL STORAGE AND SESSION STORAGE*************************************************//
// // It will save the data in the local memeory so that we can read it afteerward in local storage
// // In the local session it will store for a session in key and value

// console.log("we are on tut20");
// // this will add key-value Pair
// // localStorage.setItem('Name', "Durgesh");
// // localStorage.setItem('Name2', "Vishal");

// // to get the item use
// // if the item doesnt exist we will get null.
// // let name = localStorage.getItem('Name2'); // the key should be must right/
// // console.log(name);
// // Clears the entire local storage
// // localStorage.clear();

// // to clear a particluar key

// localStorage.removeItem("Name");
// // name = localStorage.getItem("Name2")


// //********* WE CANNOT ADD ARRAY SO WE HAVE TO ADD ARRAY IN ANAOTEHR WAY***//

// // It will give it has string 
// // two function helps us to convert this string in ton array by json parser and json.stringfy
// let impArray = ["adrak", "pyaz", "bhindi"];
// // localStorage.setItem('sabzi', JSON.stringify(impArray));

// // name = localStorage.getItem('sabzi') // this will show it as an string so now to convert it in the string use
// let name = JSON.parse(localStorage.getItem('sabzi'))
// // console.log(name[2]);

// name.forEach(element => {
//     console.log(element);
// });

// // **** EVERY WEBSITE HAVE THERE OWN DIFFRENT LOCAL STORAGE****//


// // ///************ STORING THE DATA IN THE SESSION STOARGE******/
// // sessionStorage.setItem('Name', "sDurgesh");
// // sessionStorage.setItem('Name2', "sVishal");
// // sessionStorage.setItem('sabzi', JSON.stringify(impArray));

// sessionStorage.clear();
// localStorage.clear();


// // As here we send the array to localstorage it get converted in to string.
// namelist = ["durgesh", "rai", "vishal"]
// localStorage.setItem("Name", namelist); 
// need = (localStorage.getItem('Name')); 
// console.log(need[0]);
// console.log(need[1]);
// console.log(need[2]);
// console.log(need[3]);
// console.log(need[4]);
// console.log(need[5]);
// console.log(need[6]);
// console.log(need[7]);
// console.log(typeof need[0]);

namelist = ["Pooja", "Priya", "Vishal"]
console.log(typeof namelist);
localStorage.setItem("Name", JSON.stringify(namelist)); // takes a JavaScript object and transforms it into a JSON string
// need = []
need = JSON.parse(localStorage.getItem('Name')); // takes a JSON string and transforms it into a JavaScript object.
console.log(typeof need[0]);
console.log(need.push("Durgesh"));
console.log(need.push("Avan"));
localStorage.setItem("Name", JSON.stringify(need))
console.log(typeof need[3]);
console.log(typeof need);
console.log(need[3]);
console.log(need[3][0]);
console.log(need[4]);