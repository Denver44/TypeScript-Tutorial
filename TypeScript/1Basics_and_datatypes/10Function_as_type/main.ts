function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(n1: number, n2: number) {
  console.log(n1 + n2);
}

let combine_Values;
combine_Values = add;
// combine_Values = 5; #NOTE:- This is th error as combine_Values is any type so we can assign number so we define function as type .
console.log(combine_Values(5, 66));

let combine_Values1: Function;
combine_Values1 = add;
combine_Values1 = printResult; //Note:- Two solve this error to restrict to particular type of function
console.log(combine_Values1(5, 6));

let combine_Values2: (a: number, b: number) => number;
combine_Values2 = add;
// combine_Values2 = printResult; // Note:- This is the advantage of writing return type
console.log(combine_Values2(5, 56));
