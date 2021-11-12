function add(n1: number, n2: number, callBack: (num: number) => void) {
  const res = n1 + n2;
  callBack(res);
}

function printResult(n: number) {
  console.log("Your result is : ", n);
}

add(50, 60, printResult);

// when we give callback we have to define the type of args and return type.
