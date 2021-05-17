console.log("we are on tut17");

// ************ EVENT TRACKER OR EVENT LISTENERS ****************//
// use function .addEventListener('eventname',function)  it take two args one event name and anotehr one one function if that event occur then that function will happend,
document.getElementById("heading").addEventListener("click", function (e) {

    let variable;
    console.log("You have clicked the heading");
    variable = e.target;
    variable = e.target.className;
    variable = e.target.classList;
    variable = e.target.id;

    // variable = e.offsetX;
    // variable = e.offsetY;
    variable = e.clientX;
    variable = e.clientY;
    console.log(variable);


    location.href = '//google.com'
});

