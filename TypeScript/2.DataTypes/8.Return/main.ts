//Note:- As both the args have number type so typescript infer it as return type of number.
function add(n1: number, n2: number) {
  return n1 + n2;
}

console.log(add(5, 6));

//Note:-  We can explicitly type the return type also
function add1(n1: number, n2: number): number {
  return n1 + n2;
}
console.log(add1(15, 6));

//Note:-Undefined in js is actually a value of object which doesn't exist
function add2(n1: number, n2: number): void {
  console.log(n1 + n2);
}
add2(5, 6);

//Note:- Rare use case, use void unless u want a function return undefine.
function add3(n1: number, n2: number): undefined {
  console.log(n1 + n2);
  return;
}
console.log(add3(5, 61));
