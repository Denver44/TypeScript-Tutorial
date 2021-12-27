const input1 = document.querySelector('.input1')! as HTMLInputElement; //We have to mention here the input1 is HTMLInputElement else it will throw error and putting (!) sign we states that its value will never be null
const input2 = document.querySelector('.input2')! as HTMLInputElement;
const button = document.querySelector('.button');

// Here in typescript we have to mention the datatype of the params using semicolon followed by the datatype.
function add(val1: number, val2: number) {
  return val1 + val2;
}

// As the HTMLInputElement type in string so we have to put the +(symbol) to make it integer.
button.addEventListener('click', () => {
  console.log(add(+input1.value, +input2.value));
});
