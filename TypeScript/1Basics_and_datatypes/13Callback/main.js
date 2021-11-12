function add(n1, n2, callBack) {
    var res = n1 + n2;
    callBack(res);
}
function printResult(n) {
    console.log("Your result is : ", n);
}
add(50, 60, printResult);
// when we give callback we have to define the type of args and return type.
