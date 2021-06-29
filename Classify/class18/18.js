console.log("We are on tut18");
// let btn = document.getElementById("btn").addEventListener("click", func1);// only rigjt clcik
// btn = document.getElementById("btn").addEventListener("dblclick", func2); // dblclick event
// btn = document.getElementById("btn").addEventListener("mousedown", func3); // it take all right + left + middle click of mouse

// function func1(e) // this e is a mouseevent
// {
//     // console.log("you have submitted", e);
//     e.preventDefault(); // this will bypass the default setting here it will not make the webpage to submitt the form
// }
// function func2(e) // this e is a mouseevent
// {
//     console.log("you have submitted", e);
//     e.preventDefault(); // this will bypass the default setting here it will not make the webpage to submitt the form
// }
// function func3(e) // this e is a mouseevent
// {
//     console.log("its a mouse down", e);
//     e.preventDefault(); // this will bypass the default setting here it will not make the webpage to submitt the form
// }

// No need to click on the that place just put your mouse in and out form that place  for mouseenter function
// document.querySelector('.no').addEventListener('mouseenter', function () {
//     console.log(' enter');
// })

// document.querySelector('.no').addEventListener('mouseleave', function () {
//     console.log('leave ');
// })

document.querySelector('.conatiner').addEventListener('mousemove', function (e) {
    console.log('you trigger mouse event ', e);
    console.log(e.offsetX);
    console.log(e.offsetY);
    document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},154)`;
})