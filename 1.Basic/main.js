var input1 = document.querySelector(".input1"); // We have to mention here the input1 is HTMLInputElement else it will throw error and putting (!) sign we states that its value will never be null
var input2 = document.querySelector(".input2");
var button = document.querySelector(".button");
// Here in typescript we have to mention the datatype of the params  using semicolon followed by the datatype.
function add(val1, val2) {
    return val1 + val2;
}
// As the HTMLInputElement type is string so we have to put the +(symbol) to make it integer.
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
