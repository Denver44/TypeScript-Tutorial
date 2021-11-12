function add(n1, n2) {
    return n1 + n2;
}
// As both the args have number type so typescript infer it as return type of number.
console.log(add(5, 6));
// We can explicitly type the return type also
function add1(n1, n2) {
    return n1 + n2;
}
console.log(add1(15, 6));
// Undefined in js is actually a value of object which doesn't exist
function add2(n1, n2) {
    console.log(n1 + n2);
}
add2(5, 6);
function add3(n1, n2) {
    // Rare use case use void. unless u want a function return undefine.
    console.log(n1 + n2);
    return;
}
console.log(add3(5, 61));
