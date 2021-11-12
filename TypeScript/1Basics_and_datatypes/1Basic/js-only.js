const input1 = document.querySelector('.input1')
const input2 = document.querySelector('.input2')
const button = document.querySelector('.button')

function add(val1, val2) {
    return val1 + val2;
}


// CONCATENATE
// button.addEventListener('click', () => {
//     console.log(add(input1.value, input2.value));
// })


// ADD
button.addEventListener('click', () => {
    console.log(add(+input1.value, +input2.value));
})