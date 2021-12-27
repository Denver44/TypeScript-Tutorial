function add(n1, n2) {
    return n1 + n2;
}
function printResult(n1, n2) {
    console.log(n1 + n2);
}
var combine_Values;
combine_Values = add;
// combine_Values = 5; # this is th error as combine_Values is any type so we can assign number so we define function as type .
console.log(combine_Values(5, 66));
var combine_Values1;
combine_Values1 = add;
combine_Values1 = printResult; // two solve this error to restrict to particular type of function
console.log(combine_Values1(5, 6));
var combine_Values2;
combine_Values2 = add;
console.log(combine_Values2(5, 56));
